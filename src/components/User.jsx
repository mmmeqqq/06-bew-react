import React from "react";

const User = ({ users}) => {
  return (
    <>
      <div className="flex flex-col text-center">
        <table>
          <thead>
            <tr>
              <th className="border border-gray-300 px-2">Name</th>
              <th className="border border-gray-300 px-2">Last Name</th>
              <th className="border border-gray-300 px-2">Position</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-2">{user.firstName}</td>
                <td className="border border-gray-300 px-2">{user.lastName}</td>
                <td className="border border-gray-300 px-2">{user.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
