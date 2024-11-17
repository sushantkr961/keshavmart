import React from "react";
import TableContent from "@/components/TableContent";
import TableHeader from "@/components/TableHeader";
import users from "@/data/users";

const headers = [
  "Username",
  "Email",
  "Mobile Number",
  "Status",
  "Role",
  "Branch Code",
  "Pin Code",
  "Village",
  "Ward No",
];
const keys = [
  "username",
  "email",
  "mobileNumber",
  "status",
  "role",
  "branchCode",
  "pinCode",
  "village",
  "wardNo",
];

const AllUsers = () => {
  return (
    <section className="container px-4 mx-auto">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-black dark:text-black">
          All Users
        </h2>
        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
          {users?.length} users
        </span>
      </div>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <TableHeader headers={headers} />
                <TableContent
                  datas={users}
                  keys={keys}
                  editable={true}
                  deleteable={true}
                />
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllUsers;
