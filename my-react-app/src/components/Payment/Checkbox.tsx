import * as React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  id: string;
}

export function Checkbox({ checked, onChange, id }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
      className="checkbox"
    />
  );
}
