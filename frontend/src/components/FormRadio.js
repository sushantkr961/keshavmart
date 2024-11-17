import React from "react";

const FormRadio = ({ label, name, options, onChange }) => {
  return (
    <div>
      <label className="block text-sm text-black dark:text-black mb-2">
        {label}
      </label>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center text-black dark:text-black"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              onChange={onChange}
              className="mr-2 h-5 w-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FormRadio;