import React from 'react';
import Nav from './Nav';


const Owner = () => {
  return (
    <>
    <Nav/>
    <div className="flex justify-center items-center flex-col  bg-gray-100 min-h-screen p-12 gap-4">
      <h1 className="font-bold text-3xl">Bew GROUP-D 06</h1>
      <img src="https://img.freepik.com/premium-photo/chocolate-brown-kitten-cat-with-white-mask-is-looking-something-table-as-pet-concept_25573-245.jpg" alt="brown cat" />
      <h3 className="font-bold">Short Biography:</h3>
    <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore commodi aliquam iste sit a! Esse reiciendis amet harum ut veniam sequi consequuntur, officia architecto soluta labore, nam unde laborum magnam?</p>
    </div>
    </>
  )
}

export default Owner;
