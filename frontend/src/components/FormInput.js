import React from "react";

const FormInput = ({ label, id, name, type, value, onChange, placeholder }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm text-black dark:text-black"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-800 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-black focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-200 dark:bg-gray-100 dark:text-black dark:focus:border-blue-300"
      />
    </div>
  );
};

export default FormInput;