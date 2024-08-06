import React from 'react'
import { projectsAssets } from '../assets/projectsAssets/projectAssets'

function Projects() {
    return (<>

        <div id='projects' className='h-fit w-screen py-10 pt-20 flex flex-col items-center justify-center'>
            <div className='mb-8'>
                <div className='flex flex-col items-center '>
                    <div className="flex  items-center gap-3">
                        <div className="w-7 h-[1.4px] bg-[#090A0E]"></div>
                        <h5 className="font-semibold text-[1.7rem] sm:text-[2.2rem]">PROJECTS</h5>
                    </div>

                    <p className='text-xl sm:text-2xl'>Some of my Top projects.</p>
                </div>
            </div>

            <div className='bg-[#EEF5FF] h-fit w-fit max-w-[85vw] md:max-w-[80vw] lg:max-w-[70vw] py-8 px-2 lg:px-8 flex items-start justify-center flex-wrap gap-12 gap-y-16 max-sm:gap-y-14'>
                {projectsAssets.map((element,i) => {
                    return <>
                        <div key={i} className='h-fit w-[270px] md:w-[35vw] lg:w-[25vw]  bg-[#EEF7FF] shadow-xl hover:shadow-2xl hover:scale-[1.02] duration-[75ms] relative'>
                            <img src={element.image} className='w-fit hover:scale-110 duration-150' alt='img' />
                            <div className='p-2 pl-3 w-[100%] text-[#090A0E] flex flex-col gap-[0.5rem]'>
                                <h3 className='text-lg font-semibold'>{element.name}<a href={element.deployLink}><i className="fa-solid fa-up-right-from-square text-xl p-1 px-3  hover:scale-125 active:text-blue-800 cursor-pointer" ></i></a></h3>
                                <p className='w-full mb-1 text-sm text-[#4D505D]'>{element.discription}</p>
                                <div className='flex gap-3 text-sm flex-wrap'>
                                    {element.technology.map((ele, i) => {
                                        return <span className=' h-fit w-fit px-2 py-1  bg-gray-500 text-white'>{ele}</span>
                                    })
                                    }
                                </div>

                                {/* link to visit */}
                                <a href={element.deployLink}><i className="fa-solid fa-up-right-from-square text-xl hover:scale-125 absolute text-white bottom-3 right-3 cursor-pointer" ></i></a>
                            </div>
                        </div>
                    </>
                })
                }

            </div>
        </div>
    </>
    )
}

export default Projects