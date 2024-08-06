import React from "react"
import splashImg from "../assets/general/splash.png"
import homeImg from "../assets/general/homeImg.jpg"

const Home = () => {
    const scrollTop=()=>{
        window.scrollTo(0, document.body.scrollHeight);
    }
    return <>
        <div id="home" className="animate-fadeIn relative h-fit  w-screen bg-[#EEF5FF] flex justify-center items-center">
            <div className=" w-screen flex  min-h-[89vh] gap-14 h-fit justify-center items-center flex-col-reverse gap- sm:gap-0 sm:flex-row py-5 ">

                {/* text section */}
                <div className=" w-2/5 flex max-sm:gap-2 flex-col ">

                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-7 h-[1.2px] bg-[#090A0E]"></div>
                        <h5 className="font-bold text-[0.7rem] sm:text-[1rem] ">HELLO</h5>
                    </div>
                    <div>

                        <h1 className="text-[1.3rem] leading-[88%] sm:text-[4.5vw] font-semibold flex gap-3">I'm  <p className="text-gray-600">Harsh</p> Patel</h1>
                        <h2 className="text-[1.2rem] sm:text-[3.1vw] text-gray-700 ont-semibold">A <strong className="text-[#FA0C1B] ">Front-end</strong> web Developer</h2>
                    </div>
                    <span className="text-sm sm:text-base">Passionate about creating interactive applications and experiences on the web.</span>
                    <a href="#contact" className="text-sm sm:text-[1rem] px-4 sm:px-6 py-2 sm:py-[0.45rem] mt-7 text-white bg-[#FA0C1B] w-fit hover:bg-[#FF3333] hover:scale-[1.025] active:bg-red-300 ">Contact me</a>
                </div>

                {/* image section */}
                <img src={homeImg} className="w-[40vw] max-[500px]:w-[80vw] max-sm:w-[60vw] sm:pb-8" />

            </div>


            {/* social links */}
            <div className="absolute bottom-8 left-12  sm:text-lg flex flex-col sm:flex-row gap-4 duration-150">
                <a href="https://www.linkedin.com/in/harsh-patel-84baa62b8"><i className="fa-brands fa-linkedin-in hover:scale-110 duration-75 active:text-red-600"></i></a>
                <a href="mailto:harshcode07@gmail.com"><i className="fa-regular fa-envelope hover:scale-110 duration-75 active:text-red-600"></i></a>
                <a href="https://github.com/harshGitHub03" className="h-fit w-fit"><i className="fa-brands fa-github hover:scale-110 duration-75 active:text-red-600"></i></a>
                <a href="https://www.instagram.com/harsh_.vibes"> <i className="fa-brands fa-instagram hover:scale-110 duration-75 active:text-red-600"></i></a>
            </div>

            {/* swipe down button */}
            <a onClick={()=>scrollTop()} className="absolute bottom-[80px] right-6 text-[0.7rem] sm:text-sm p-2 rotate-90 flex items-center gap-3 hover:bottom-[75px] text-gray-900  duration-100 ">
                <p>swipe down</p>
                <i className="fa-solid fa-arrow-right"></i>
            </a>

        </div>
    </>
}

export default Home