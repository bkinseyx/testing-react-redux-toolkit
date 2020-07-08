import React from 'react';

interface CustomTextInputProps {
  onChange: (value: string) => void;
  value: string;
  label: string;
  idPrefix: string;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
  value,
  onChange,
  label,
  idPrefix,
}) => {
  const inputId = `${idPrefix}-input`;

  return (
    <div>
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        type="text"
        className="form-control"
        value={value}
        onChange={(event): void => onChange(event.target.value)}
      />
    </div>
  );
};
