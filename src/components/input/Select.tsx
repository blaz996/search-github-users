import React, { SelectHTMLAttributes } from 'react';

import { MdKeyboardArrowDown } from 'react-icons/md';

import './Select.scss';

export type SelectProps = {
  label: string;
  options: string[];
  defaultOption: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({
  label,
  options,
  defaultOption,
  ...selectProps
}: SelectProps) => {
  return (
    <div className='select__container'>
      {label && <label className='select__label'>{label}</label>}

      <select
        name='languages'
        id='languages'
        className='select'
        {...selectProps}
      >
        {options.map((option) => {
          if (option === defaultOption) {
            return <option selected={true}>{option.toUpperCase()}</option>;
          }
          return <option value={option}>{option.toUpperCase()}</option>;
        })}
      </select>

      <div className='select__arrow'>
        <MdKeyboardArrowDown />
      </div>
    </div>
  );
};

export default Select;
