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
      <label htmlFor={name} className="mb-1 pl-1">
        {label}
      </label>

      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className={`border-b bg-transparent px-1 py-2 ring-black focus:rounded-sm focus:outline-none focus:ring-1`}
      />
      {error && <p className="text-red-600">{label} cannot be empty.</p>}
    </div>
  );
}
