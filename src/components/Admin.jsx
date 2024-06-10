import React from "react";

const Admin = ({ users, onDelete }) => {
  return (
    <>
      <div className="flex flex-col text-center">
      <h1 className="font-bold">Create User Here</h1>
        <table>
          <thead>
            <tr>
              <th className="border border-gray-300 px-2">Name</th>
              <th className="border border-gray-300 px-2">Last Name</th>
              <th className="border border-gray-300 px-2">Position</th>
              <th className="border border-gray-300 px-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-2">{user.firstName}</td>
                <td className="border border-gray-300 px-2">{user.lastName}</td>
                <td className="border border-gray-300 px-2">{user.position}</td>
                <td className="border border-gray-300 px-2">
                  <button onClick={() => onDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin;
