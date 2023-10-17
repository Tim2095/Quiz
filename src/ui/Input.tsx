import React, { forwardRef } from "react";

interface InputProps {
  className?: string;
  label?: string;
  input: {
    type: string;
    id: string;
    placeholder: string;
    className?: string;
    name?: string;
    required?: boolean
  };
  ref?: React.Ref<HTMLInputElement>
}

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} ref={ref} />
      </>
    );
  }
);

export default Input;
