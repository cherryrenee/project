import * as React from "react";

interface RadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
}

export function RadioButton({ name, value, checked, onChange }: RadioButtonProps) {
  return (
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="radio-button"
    />
  );
}
