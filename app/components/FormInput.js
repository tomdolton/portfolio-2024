import React from "react";

export default function FormInput({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  className,
  required,
  error,
}) {
  return (
    <div className={`${className} flex flex-col text-left`}>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>

      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className={`border border-grey-200 bg-white/10 text-offwhite px-4 py-3 ring-offwhite focus:outline-none focus:ring-1 rounded-lg transition-all`}
      />
      {error && <p className="text-red-600">{label} cannot be empty.</p>}
    </div>
  );
}
