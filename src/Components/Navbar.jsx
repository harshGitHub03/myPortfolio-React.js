import React from 'react'

function Navbar({ hamburgerIcon, setHamburgerIcon }) {
  return (
    <div id='navbar' className='bg-[#EEF5FF]  flex items-center justify-between w-full px-16 py-5 overflow-hidden'>
      <h3 className="text-3xl font-semibold">HARSH</h3>
      <div className={`flex pl-5 sm:bg-transparent gap-8 ${hamburgerIcon==true?'max-[640px]:hidden':'max-[640px]:absolute  flex-col sm:flex-row items-center justify-around z-30 bg-[#222731e8] text-white sm:text-[#090A0E] py-2 w-fit px-10 right-[5vw]  top-[90px] '}`}>
        <a href="#home" className='sm:hover:text-red-600 active:text-red-500 px-1'>Home</a>
        <a href="#about" className='sm:hover:text-red-600 active:text-red-500 px-1'>About</a>
        <a href="#skills" className='sm:hover:text-red-600 active:text-red-500 px-1'>Skills</a>
        <a href="#projects" className='sm:hover:text-red-600  active:text-red-500 px-1'>Projects</a>
        <a href="#contact" className='sm:hover:text-red-600 active:text-red-500 px-1'>Contact</a>
      </div>

      <div className='flex justify-center items-center sm:hidden text-3xl z-10'>{
        hamburgerIcon == true ? <i class="fa-solid fa-bars-staggered p-1" onClick={()=>setHamburgerIcon(false)}></i> : <i class="fa-solid fa-xmark p-1" onClick={()=>setHamburgerIcon(true)}></i>
      }
      </div>
    </div>
  )
}

export default Navbar