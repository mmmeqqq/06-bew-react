import React from 'react';
import Nav from './Nav';


const Owner = () => {
  return (
    <>
    <Nav/>
    <div className="flex justify-center items-center flex-col  bg-gray-100 min-h-screen p-12 gap-4">
      <h1 className="font-bold text-3xl">Bew GROUP-D 06</h1>
      <img src="https://avatars.githubusercontent.com/u/157972007?v=4" alt="me" />
      <h3 className="font-bold">Short Biography:</h3>
    <p className="text-center">Hi, I'm Bew, a passionate web developer and Personal trainer based in Bangkok, Thailand. I've been a personal trainer for 5 years old and now i'm interesting in coding.</p>
    </div>
    </>
  )
}

export default Owner;
