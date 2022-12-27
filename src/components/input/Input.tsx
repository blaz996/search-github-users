import React, { InputHTMLAttributes } from 'react';

export type InputProps = {
  label?: string;
  children?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ label, children, ...inputProps }: InputProps) => {
  return (
    <div className='input__container'>
      <label className='input__label'>{label}</label>
      <input {...inputProps} />
      {children}
    </div>
  );
};

export default Input;
