import React from 'react';

type Props = {
  label: string;
  name: string;
  type?: string;
  isTextArea?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
};

const TextInput = ({ label, type, isTextArea, name, onChange, placeholder }: Props) => {
  const inputId = label?.split(' ').join('-');

  return (
    <div>
      <label htmlFor={inputId} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={inputId}
          placeholder={placeholder}
          name={name}
          required
          maxLength={500}
          rows={4}
          onChange={onChange}
          className={
            'h-52 my-3 w-full rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:text-black dark:focus:bg-opacity-100 transition-all dark:outline-none'
          }
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          required
          maxLength={500}
          className={
            'h-14 w-full rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:text-black dark:focus:bg-opacity-100 transition-all dark:outline-none'
          }
        />
      )}
    </div>
  );
};

export default TextInput;
