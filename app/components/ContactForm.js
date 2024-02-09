import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";
// import Button from "../Button";

import dynamic from "next/dynamic";
import IconSpinner from "./icons/IconSpinner";
import RightArrow from "./icons/RightArrow";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"));

export default function ContactForm() {
  // const recaptchaRef = React.createRef();

  // Contact for field states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");

  // To lazy load recaptcha
  const [recaptchaNeeded, setRecaptchaNeeded] = useState(false);

  // Form validation state
  const [errors, setErrors] = useState({});

  // Sets when form is sending after submit click
  const [isSending, setIsSending] = useState(false);

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [failureMessage, setFailureMessage] = useState(
    "Oops! Something went wrong, please try again."
  );

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullName.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const onReCAPTCHAChange = async (captchaCode) => {
    if (!captchaCode) {
      return;
    }
    setCaptchaValue(captchaCode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    setShowFailureMessage(false);

    if (captchaValue === "") {
      setFailureMessage(`Please click "I'm not a robot" before submitting.`);
      setShowFailureMessage(true);
      return;
    }
    setFailureMessage("Oops! Something went wrong, please try again");

    let isValidForm = handleValidation();

    if (isValidForm) {
      setIsSending(true);

      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullName: fullName,
          message: message,
          gRecaptchaResponse: captchaValue,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();

      if (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setIsSending(false);
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setIsSending(false);

      // Reset form fields
      setFullName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-right max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <FormInput
          type="text"
          value={fullName}
          placeholder="Name"
          label="Name"
          name="Name"
          required={true}
          onChange={(e) => {
            setFullName(e.target.value);
            setRecaptchaNeeded(true);
          }}
          error={errors?.fullName}
        />

        <FormInput
          type="email"
          value={email}
          placeholder="Email address"
          label="Email address"
          name="email"
          required={true}
          onChange={(e) => {
            setEmail(e.target.value);
            setRecaptchaNeeded(true);
          }}
          error={errors?.email}
        />

        <div className="flex flex-col text-left md:col-span-2">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            name="message"
            value={message}
            required={true}
            placeholder="Type your message here..."
            onChange={(e) => {
              setMessage(e.target.value);
              setRecaptchaNeeded(true);
            }}
            className="border border-grey-200 bg-white/10 text-offwhite px-4 py-3 ring-offwhite focus:outline-none focus:ring-1 rounded-lg transition-all"
            rows={4}
            error={errors?.message}
          ></textarea>
        </div>
      </div>

      {recaptchaNeeded && (
        <ReCAPTCHA
          onChange={onReCAPTCHAChange}
          size="normal"
          sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
          className="mb-4"
        />
      )}

      <button
        type="submit"
        disabled={isSending}
        className=" text-lg border-offwhite border rounded-3xl px-5 py-2.5 mt-auto flex justify-between items-center gap-11 hover:gap-14 hover:bg-white/10 transition-all my-4"
      >
        {isSending ? <IconSpinner className="mx-4 animate-spin" /> : "Submit"}
        <RightArrow />
      </button>

      {/* <Button
        className="mt-6 h-[46px] md:mt-0"
        type="submit"
        size="md"
        arrowRightClass="right-6"
        btnPaddingClass={isSending ? "pl-12" : "pl-7"}
        disabled={isSending}
      > */}

      {/* </Button> */}

      <div className="text-left">
        {showSuccessMessage && (
          <p className="my-2 font-medium text-green-700">
            Thank you! Your message has been received.
          </p>
        )}
        {showFailureMessage && (
          <p className="font-medium text-red-600">{failureMessage}</p>
        )}
      </div>
    </form>
  );
}
