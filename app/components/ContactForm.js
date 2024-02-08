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
    <form onSubmit={handleSubmit} className="text-right">
      <FormInput
        type="text"
        value={fullName}
        placeholder="Enter full name"
        label="Name"
        name="fullName"
        required={true}
        onChange={(e) => {
          setFullName(e.target.value);
          setRecaptchaNeeded(true);
        }}
        className="mb-6"
        error={errors?.fullName}
      />

      <FormInput
        type="email"
        value={email}
        placeholder="Enter email"
        label="Email"
        name="email"
        required={true}
        onChange={(e) => {
          setEmail(e.target.value);
          setRecaptchaNeeded(true);
        }}
        className="mb-6"
        error={errors?.email}
      />

      <div className="mb-6 flex flex-col text-left">
        <label htmlFor="message" className="pl-1">
          Message
        </label>
        <textarea
          name="message"
          value={message}
          required={true}
          placeholder="Enter message"
          onChange={(e) => {
            setMessage(e.target.value);
            setRecaptchaNeeded(true);
          }}
          className="border-b bg-transparent py-2 px-1 ring-black focus:rounded-sm focus:outline-none focus:ring-1"
          error={errors?.message}
        ></textarea>
      </div>

      {recaptchaNeeded && (
        <ReCAPTCHA
          onChange={onReCAPTCHAChange}
          size="normal"
          sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
        />
      )}

      <button
        type="submit"
        disabled={isSending}
        className="text-lg border-offwhite border rounded-3xl px-5 py-2.5 mt-auto flex justify-between items-center gap-11 hover:gap-14 hover:bg-white/10 transition-all"
      >
        {isSending ? (
          <IconSpinner className="absolute left-12 top-2 animate-spin" />
        ) : (
          "Submit"
        )}
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
