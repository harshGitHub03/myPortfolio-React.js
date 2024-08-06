import React from 'react'
import splashImg from "../assets/general/splashWhite.png"
import personImg from "../assets/general/personBlack&White.jpg"

import signatureImg from "../assets/general/Signature.jpg"

function About() {
    return (
        <div id='about' className='w-screen h-fit my-14 sm:my-10 flex justify-between sm:justify-center items-center gap-10 flex-col sm:flex-row'>
            <div className="relative flex h-[40vw] w-[60vw] sm:w-[35vw] h-20 my-10 justify-center items-center">
                <img src={splashImg} className="w-[100%] mix-blend-screen absolute" />
                <img src={personImg} className="w-[74%] mix-blend-screen  absolute" />
            </div>

            <div className='flex flex-col gap-7 items-center sm:items-start'>
                <div className="flex items-center gap-3 ">
                    <div className="w-7 h-[1.2px] bg-[#090A0E]"></div>
                    <h5 className="font-bold text-2xl ">ABOUT ME</h5>
                </div>

                <p className='text-sm sm:text-base text-center sm:text-left w-[60vw] sm:w-[30vw]'>
                "I excel in sculpting immersive web interfaces that captivate and engage users. Armed with expertise in <strong>REACT JS, Tailwind, Redux toolkit, Bootstrap, Html, Css</strong> and <strong> Javascript</strong>, I breathe life into development concepts with meticulous attention to detail. Continually pushing boundaries.<br/> I innovate with a passion for delivering seamless, unforgettable digital experiences that redefine industry standards."
                </p>

                <img src={signatureImg} className='w-[8rem]'/>

                <a href='#contact' className="px-5 py-[0.5rem] hover:scale-[1.04] hover:bg-gray-500 active:bg-gray-800 text-sm text-white bg-[#4D505D] w-fit">Contact me</a>
           
            </div>
        </div>
    )
}

export default About