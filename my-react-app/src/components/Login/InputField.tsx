"use client";
import * as React from "react";
import "./Login.css";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  isFirst: boolean;
}

function InputField({ label, type, placeholder, value, onChange, isFirst }: InputFieldProps) {
  const fieldClass = isFirst ? "input-field first-field" : "input-field";

  return (
    <div className={fieldClass}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default InputField;

