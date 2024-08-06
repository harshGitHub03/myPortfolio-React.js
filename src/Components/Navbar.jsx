import React, { useEffect, useRef, useState } from 'react'

function Navbar() {
  const [hamburgerIcon, setHamburgerIcon] = useState(true)

  const ref = useRef()
  useEffect(() => {
    const handler = (e) => {
      if (ref.current.contains(e.target)) {
        setHamburgerIcon(true)
      }
    }
    document.body.addEventListener("click", handler)
  })

  return (
    <div id='navbar' className='bg-[#EEF5FF] sticky top-0   shadow-xl  flex items-center justify-between w-full px-16 py-4 h-fit z-10'>
      <h3 className="text-3xl font-semibold">HARSH</h3>
      <div ref={ref} className={`${hamburgerIcon ? "max-md:top-[-700px]" : "max-md:top-14"} flex gap-8 max-md:gap-7 max-md:flex-col max-md:absolute max-md:duration-150 max-md:left-0  max-md:bg-[#EEF5FF] max-md:py-6 max-md:shadow-xl max-md:w-full max-md:items-center`}>
        <a href="#home" className='sm:hover:text-red-600 active:text-red-500 px-1'>Home</a>
        <a href="#about" className='sm:hover:text-red-600 active:text-red-500 px-1'>About</a>
        <a href="#skills" className='sm:hover:text-red-600 active:text-red-500 px-1'>Skills</a>
        <a href="#projects" className='sm:hover:text-red-600  active:text-red-500 px-1'>Projects</a>
        <a href="#contact" className='sm:hover:text-red-600 active:text-red-500 px-1'>Contact</a>
      </div>

      <div className='flex justify-center items-center md:hidden text-3xl z-10'>{
        hamburgerIcon == true ? <i className="fa-solid fa-bars-staggered p-1" onClick={() => setHamburgerIcon(false)}></i> : <i className="fa-solid fa-xmark p-1" onClick={() => setHamburgerIcon(true)}></i>
      }
      </div>
    </div>
  )
}

export default Navbar