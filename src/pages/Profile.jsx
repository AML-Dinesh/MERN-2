// import React from 'react'
import x from '../assets/img/pass.jpeg'
const Profile = () => {
  return (
    <>
    <div className='flex flex-col' >
     <div className='b1 w-screen h-50 flex  justify-start items-center'>
      <div className="c1 w-[50%] flex items-center justify-center pl-50 pt-9">
        <img src={x} alt="Profile" className=" i rounded-2xl" />
      </div>
      <div className='c2 w-[50%] text-slate-700 flex text-center justify-center mr-8 items-center font-bold'>
      "I am an aspiring MERN stack developer with a passion for building dynamic and responsive web applications. Proficient in MongoDB, Express.js, React, and Node.js, I enjoy creating seamless user experiences while leveraging the power of JavaScript throughout the entire development process."
      </div>
    
   </div>
   <div className=' w-screen h-60 flex justify-start items-center bg-red-400 p-16'>
      hi
    </div>
    
    </div>
    </>

  )
}

export default Profile
