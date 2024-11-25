"use client";
import React, { useState } from "react";
import Modal from "./Modal";

const TableContent = ({ datas, keys, editable, deleteable }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [currentData, setCurrentData] = useState(null); // Data to be edited

  const handleEdit = (data) => {
    setCurrentData(data); // Set the current data to be edited
    setIsModalOpen(true); // Open the modal
  };

  const handleDelete = (data) => {
    if (
      window.confirm(
        `Are you sure you want to delete ${data.name || data.username}?`
      )
    ) {
      alert(`${data.name || data.username} has been deleted.`);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setCurrentData(null); // Reset current data
  };

  return (
    <>
      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-200 dark:bg-gray-50">
        {datas?.map((user) => (
          <tr key={user.id || user.email}>
            {keys.map((key, idx) => (
              <td
                key={`${user.id || user.email}-${key}`}
                className="px-4 py-4 text-sm text-black dark:text-black whitespace-nowrap"
              >
                {key === "img" ? (
                  <img
                    src={user[key]}
                    alt={user.name || "User"}
                    className="w-10 h-10 rounded-full"
                  />
                ) : key === "teams" ? (
                  <div className="flex items-center gap-x-2">
                    {user[key]?.map((team, index) => (
                      <p
                        key={`${user.id || user.email}-team-${index}`}
                        className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60"
                      >
                        {team}
                      </p>
                    ))}
                  </div>
                ) : (
                  user[key] || <></> // Ensure no null or undefined values
                )}
              </td>
            ))}
            {(editable || deleteable) && (
              <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-6">
                  {editable && (
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-black hover:text-yellow-500 focus:outline-none"
                    >
                      {/* Edit Button */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </button>
                  )}

                  {deleteable && (
                    <button
                      onClick={() => handleDelete(user)}
                      className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-black hover:text-red-500 focus:outline-none"
                    >
                      {/* Delete Button */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Edit User">
        <p>You are editing: {currentData?.name || currentData?.username}</p>
      </Modal>
    </>
  );
};

export default TableContent;
