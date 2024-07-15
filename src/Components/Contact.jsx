import react from 'react'

const Contact = () => {
    return <>
        <div className='flex flex-col gap-6 items-center bg-[#EEF5FF]'>
            <div id='contact' className='flex flex-col md:flex-row justify-center items-center gap-14 h-fit w-full py-7 mt-7  relative'>
                <div className='flex flex-col items-start  justify-around w-[70vw] md:w-1/3 gap-10  md:gap-28'>

                    <div className='flex flex-col items-start gap-2 h-fit'>
                        <div className="flex  items-center gap-3">
                            <div className="w-7 h-[1.4px] bg-[#090A0E]"></div>
                            <h5 className="font-bold text-2xl">CONTACT</h5>
                        </div>
                        <span className='text-5xl text-gray-900'>Let's deliver value together</span>
                    </div>

                    <div className='flex flex-col gap-6 items-start '>
                        <a href='tel:+917879184133' className='hover:text-gray-800 active:text-red-600 duration-75'><i className="fa-solid fa-phone"></i> +91 7879184133</a>
                        <a href='mailto:harshcode07@gmail.com' className='hover:text-gray-800 active:text-red-600 duration-75'><i className="fa-solid fa-envelope"></i> harshcode07@gmail.com</a>
                        <div className="text-lg flex gap-4">
                            <a href="https://www.linkedin.com/in/harsh-patel-84baa62b8"><i className="fa-brands fa-linkedin-in hover:scale-110 p-1 duration-75 active:text-red-600"></i></a>
                            <a href="https://github.com/harshGitHub03"><i className="fa-brands fa-github hover:scale-110 duration-75 p-1 active:text-red-600"></i></a>
                            {/* <a href=""><i className="fa-brands fa-twitter hover:scale-110 duration-75 p-1 active:text-red-600"></i></a> */}
                            <a href="https://www.instagram.com/harsh_.vibes"><i className="fa-brands fa-instagram hover:scale-110 duration-75 p-1 active:text-red-600"></i></a>
                        </div>
                    </div>
                </div>


                <form action='https://formspree.io/f/xvgpgbdl' method='POST'  className='flex flex-col items-start gap-11 w-[80vw] sm:w-2/3 md:w-1/3 p-8 bg-white rounded-[20px]'>
                    <h3 className='text-3xl font-semi-col'>Send me a Message</h3>
                    <div className='w-full'>
                        <h5 className='text-sm text-gray-600 mb-1'>Full Name*</h5>
                        <input type="text" required autoComplete='given-name'  name='Name' className='outline-none w-full border-b-2' />
                    </div>
                    <div className='w-full'>
                        <h5 className='text-sm text-gray-600 mb-1'>Email*</h5>
                        <input type="text" required autoComplete='gmail'  name='Gmail' className='outline-none w-full border-b-2' />
                    </div>
                    <div className='w-full'>
                        <h5 className='text-sm text-gray-600 mb-1'>Your Message*</h5>
                        <textarea required  autoCapitalize='off' name='text' className='outline-none m-full  max-h-[100px] min-h-2 border-b-2 w-full' ></textarea>
                    </div>

                    <button className='bg-[#d5e6ff]  px-3 py-2 rounded-xl text-[1.15rem] font-md hover:bg-[#E3EAF4] active:bg-[#BFCFE5] active:text-white'>Send <i className="fa-solid fa-paper-plane"></i></button>
                </form>

                {/* scoll Top button */}
                <a href="#navbar" className=" absolute bottom-[70px] right-9 text-sm p-2 rotate-[-90deg] hidden md:flex items-center gap-3 hover:bottom-[75px] text-gray-600  duration-100 ">
                    <p>swipe up</p>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>

            </div>

            <div className='flex flex-col items-center gap-2 mb-2'>
                <hr className='w-[80vw] border-gray-200 border-[1px]'/>
                <span className='flex text-[0.7rem] items-center text-gray-600'>copyright © harsh.portfolio <div className='h-3 w-[1.5px] mx-1 bg-gray-400'></div>india</span>
                </div>
        </div>
    </>
}

export default Contact