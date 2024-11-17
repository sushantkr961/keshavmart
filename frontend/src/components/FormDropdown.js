import React from "react";

const FormDropdown = ({ label, id, name, value, options, onChange }) => {
  return (
    <div>
      <label
        className="block text-sm text-black dark:text-black mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="block w-full mt-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-200 dark:bg-gray-100 dark:text-black dark:focus:border-blue-300"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormDropdown;
