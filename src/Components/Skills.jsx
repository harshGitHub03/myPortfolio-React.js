import React from "react"
// import reactLogo from "../assets/skills/SkillsSVG/react-logo-vector.svg"
import { technology, frameWorks } from "../assets/skillsAssets/skillsAssets"
const Skills = () => {

    return <>
        <div id="skills" className="bg-[#EEF5FF] h-fit  w-screen flex flex-col lg:flex-row justify-evenly items-center  py-14 gap-5 sm:gap-0">
            <div className="w-2/3 sm:w-1/3 flex flex-col items-center lg:items-start gap-2 pl-10 ">

                <div className="flex items-center gap-3">
                    <div className="w-7 h-[1.4px] hidden sm:flex bg-[#090A0E]"></div>
                    <h5 className="font-bold text-3xl">SKILLS</h5>
                </div>

                <p className="text-[0.95rem] w-[70vw] sm:w-[50vw] lg:w-fit text-center lg:text-start sm:text-lg">Techonologies, libraries and frameworks i'm professionalized at.</p>
            </div>

            {/* skills section */}
            <div className=" flex flex-col justify-center sm:justify-between  items-center w-[90%] sm:w-[70%] lg:w-2/4 h-fit flex-wrap gap-14 pt-3 lg:pt-0">

                {/* technologies html,css,javascript */}
                <div className="flex justify-center sm:justify-between  items-center h-fit flex-wrap gap-6 py-5 lg:py-0">
                    <h1 className="text-2xl text-gray-600">Technologies</h1>
                    <div className=' flex justify-center sm:justify-between  items-center w-[100%] h-fit flex-wrap gap-3  pt-3 lg:py-0'>
                        {
                            technology.map((element, i) => {
                                return <>
                                    <div key={i} className="h-fit flex sm:flex-col items-center p-8 flex-wrap bg-[#EEF7FF] shadow-xl hover:shadow-2xl gap-5 ">
                                        <img src={element.image} className="w-10 sm:w-28 sm:max-w-24" />
                                        <h3 className="text-sm sm:text-xl font-semibold">{element.text}</h3>
                                    </div>
                                </>
                            })
                        }
                    </div>
                </div>
                <hr className="border-gray-300 border shadow w-[80%]" />

                {/* frameworks react tailwind bootstrap */}
                <div className="flex justify-center sm:justify-between  items-center h-fit flex-wrap gap-6  lg:py-0">
                    <h1 className="text-2xl text-center text-gray-600">Frameworks and Libraries</h1>
                    <div className=' flex justify-center sm:justify-between  items-center w-[100%] h-fit flex-wrap gap-3  pt-3 lg:py-0'>
                        {
                            frameWorks.map((element, i) => {
                                return <>
                                    <div key={i} className="h-fit flex sm:flex-col items-center p-8 flex-wrap bg-[#EEF7FF] shadow-xl hover:shadow-2xl gap-5 ">
                                        <img src={element.image} className="w-10 sm:w-28 sm:max-w-24" />
                                        <h3 className="text-sm sm:text-xl font-semibold">{element.text}</h3>
                                    </div>
                                </>
                            })
                        }
                    </div>
                </div>
            </div>
            <p></p>

        </div>
    </>
}

export default Skills