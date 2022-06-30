import React, { useState } from 'react'
import useLocalStorage from 'use-local-storage'
import { BsGoogle,BsFacebook,BsLinkedin,BsTwitter,BsWhatsapp } from 'react-icons/bs';

import { MdLightMode,MdNightlight } from 'react-icons/md';


function App() {

  const [open, setOpen] = useState(false)

  const handleOpen = () =>{
    setOpen(!open)
  }

  return (
    <div className='w-[350px] h-[350px] mx-auto flex-col justify-center items-center'>

      <h1 className='text-3xl font-bold text-slate-600 text-center my-6'>Login</h1>

      <div className='w-[350px] h-[420px] bg-gray-200 rounded-md shadow-lg shadow-gray-400 p-6'>

        <ul className='flex justify-center space-x-6 text-slate-600'>
          <BsGoogle size={25}/>
          <BsFacebook size={25}/>
          <BsTwitter size={25}/>
          <BsLinkedin size={25}/>
          <BsWhatsapp size={25}/>
        </ul><br />

        <form className=''>

        <label className='text-xl font-semibold text-slate-600' htmlFor="">E-mail</label><br />

        <input className='w-full rounded px-2 py-2 border border-slate-500 mb-4' type="text" placeholder='Enter your name' /><br />

        <label className='text-xl font-semibold text-slate-600' htmlFor="">Password</label><br />

        <input className='w-full rounded px-2 py-2 border border-slate-500' type="text" placeholder='Enter your name' />

        <button className='w-full bg-blue-800 rounded my-4 py-1 text-xl text-slate-200 font-semibold'>Login</button>
        </form>

        <ul className='flex justify-between'>
          <p>Forget your password?</p>

          <p className='text-indigo-800 underline'>Reset Password</p>
        </ul>

        <h2 className='text-lg text-slate-600 font-semibold text-center py-2'>Create-Account</h2>

        {/* toggle */}
        <ul className='flex justify-center' onClick={handleOpen}>
          {
            (!open) ? <MdNightlight className='text-slate-600' size={35}/> : <MdLightMode className='text-yellow-600' size={35}/>
          }
        </ul>

      </div>
    </div>
  );
}

export default App;
