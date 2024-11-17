"use client";
import AddForm from "@/components/AddForm";
import React, { useState } from "react";

const AddUser = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    mobileNumber: "",
    pinCode: "",
    village: "",
    wardNo: "",
  });

  const formFields = [
    { label: "Username", id: "username", name: "username", type: "text" },
    { label: "Email", id: "email", name: "email", type: "email" },
    {
      label: "Mobile Number",
      id: "mobileNumber",
      name: "mobileNumber",
      type: "text",
    },
    { label: "Pin Code", id: "pinCode", name: "pinCode", type: "text" },
    { label: "Village", id: "village", name: "village", type: "text" },
    { label: "Ward Number", id: "wardNo", name: "wardNo", type: "text" },
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues); // Log form values to the console
  };

  return (
    <section className="max-w-full p-6 mx-auto bg-white dark:bg-white">
      <h2 className="text-lg font-semibold text-black capitalize dark:text-black">
        Add User
      </h2>
      <AddForm
        formFields={formFields}
        formValues={formValues}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};

export default AddUser;
