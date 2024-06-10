import React, { useState } from "react";
import Nav from "./Nav";
import Admin from "./Admin";
import User from "./User";

const Home = () => {
  const [adminIsOn, setAdminIsOn] = useState(false);
  const [userIsOn, setUserIsOn] = useState("home");

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  const handleSave = () => {
    const newUser = { 
      firstName: name, 
      lastName: lastName, 
      position: position, 
      id: users.length + 1 };

    setUsers([...users, newUser]);
    setName("");
    setLastName("");
    setPosition("");
  };

  const handleDelete = (index) => {
    const newUsers = users.filter((_, i) => i !== index);
    setUsers(newUsers);
  };

  return (
    <>
      <Nav />
      <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen gap-9">
      <h2 className="font-bold text-5xl mb-8 text-gray-800">Generation Thailand</h2>
      <h3 className="font-bold text-3xl"> {userIsOn === "home" ? " React Assessment" : userIsOn === "user" ? " Home - User Sector": "Home - Admin Sector" }</h3>
        
        <div className="space-x-4">
          <button 
            onClick={() => {
              setUserIsOn("user");
              setAdminIsOn(false);
            }}
            className="bg-white text-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-200"
          >
            User Home Sector
          </button>
          <button 
            onClick={() => {
              setUserIsOn("admin");
              setAdminIsOn(true);
            }}
            className="bg-white text-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-200"
          >
            Admin Home Sector
          </button>
        </div>
        <div className="p-8">
        {adminIsOn &&  (
          <div className="mb-8">
            <h1 className="font-bold text-2xl">Create User Here</h1>
            <div className="flex gap-4 mt-4">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Name"
                className="w-1/4 bg-white rounded-md p-2"
              />
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                placeholder="Last Name"
                className="w-1/4 bg-white rounded-md p-2"
              />
              <input
                type="text"
                name="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
                placeholder="Position"
                className="w-1/4 bg-white rounded-md p-2"
              />
              <button
                onClick={handleSave}
                className="bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        )}
        { adminIsOn && <Admin users={users} onDelete={handleDelete} />}
        {userIsOn === "user" && <User users={users} />}
      </div>

      </div>
      
    </>
  );
};
export default Home;
