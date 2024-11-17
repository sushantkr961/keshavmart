"use client";
import AddForm from "@/components/AddForm";
import React, { useState } from "react";

const AddProducts = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    pricePerUnit: "",
    unit: "",
    TotalQuantity: "",
  });

  const formFields = [
    { label: "Name", id: "name", name: "name", type: "text" },
    {
      label: "Description",
      id: "description",
      name: "description",
      type: "text",
    },
    {
      label: "Price Per Unit",
      id: "pricePerUnit",
      name: "pricePerUnit",
      type: "number",
    },
    {
      label: "Unit",
      id: "unit",
      name: "unit",
      type: "dropdown",
      options: [
        { label: "Select Unit", value: "" },
        { label: "lit", value: "lit" },
        { label: "ml", value: "ml" },
        { label: "kg", value: "kg" },
        { label: "gm", value: "gm" },
        { label: "pkt", value: "pkt" },
      ],
    },
    {
      label: "Total Quantity",
      id: "TotalQuantity",
      name: "TotalQuantity",
      type: "number",
    },
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
        Add Product
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

export default AddProducts;
