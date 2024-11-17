import FormDropdown from "@/components/FormDropdown";
import FormInput from "@/components/FormInput";
import FormRadio from "@/components/FormRadio";
import React from "react";

const AddForm = ({ formFields, formValues, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        {formFields?.map((field, index) => {
          switch (field.type) {
            case "text":
            case "number":
            case "email":
            case "password":
            case "date":
            case "textarea":
            case "file":
              return (
                <FormInput
                  key={index}
                  label={field.label}
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  value={formValues[field.name] || ""}
                  onChange={handleInputChange}
                />
              );
            case "dropdown":
              return (
                <FormDropdown
                  key={index}
                  label={field.label}
                  id={field.id}
                  name={field.name}
                  value={formValues[field.name] || ""}
                  options={field.options}
                  onChange={handleInputChange}
                />
              );
            case "radio":
              return (
                <FormRadio
                  key={index}
                  label={field.label}
                  name={field.name}
                  options={field.options}
                  onChange={handleInputChange}
                />
              );
            default:
              return null;
          }
        })}
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Submit
        </button>
        <button
          type="button"
          className="ml-4 px-8 py-2.5 leading-5 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddForm;