import React from 'react';

interface CustomSelectProps {
  onChange: (value: string) => void;
  options: string[];
  value: string;
  label: string;
  idPrefix: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  label,
  idPrefix,
}) => {
  const selectId = `${idPrefix}-select`;
  return (
    <div>
      <label htmlFor={selectId}>{label}</label>
      <select
        id={selectId}
        value={value}
        className="form-control"
        onChange={(event): void => onChange(event?.target.value)}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};
