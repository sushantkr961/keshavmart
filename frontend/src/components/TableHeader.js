import React from "react";

const TableHeader = ({ headers }) => {
  return (
    <thead className="bg-gray-50 dark:bg-gray-50">
      <tr>
        {headers.map((header, idx) => (
          <th
            key={idx}
            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black dark:text-black"
          >
            {header}
          </th>
        ))}
        <th className="relative py-3.5 px-4">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;