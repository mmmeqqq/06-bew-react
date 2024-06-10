import React from 'react'

export const User = () => {
    
  return (
    <>
    <Nav/>
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen gap-9">
      <h1 className="font-bold text-6xl">Generation Thailand</h1>
      <h2 className="font-bold text-5xl">React-Assessment</h2>
      <div className="space-x-6">
      <button className="bg-white text-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">User Home Sector</button>
      <button className="bg-white text-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">Admin Home Sector</button>
      </div>
    </div>
    </>
  )
}
