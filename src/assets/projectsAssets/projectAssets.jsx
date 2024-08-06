import weatherApp from "../projectsAssets/images/wheatherApp.png"
import realEstate from "../projectsAssets/images/realEstate.png"
import ecommerceApp from "./images/ecommerceApp.jpg"
const projectsAssets=[
    {
        image:weatherApp,
        name:"Weather App",
        discription:"Weather app enables users to access real-time weather data based on their Current location or any location they search for. By incorporating features such as live location updates, precise location search capabilities, and integration with weather APIs like OpenWeatherMap.",
        technology:["API","REACT","TAILWIND"],
        deployLink:"https://weatherapp-reactjs-harsh.netlify.app/"
    },
    {
        image:ecommerceApp,
        name:"Cara - Ecommerce app",
        discription:"A ReactJS ecommerce app integrating external APIs. Leveraged Redux Toolkit for efficient state management and Tailwind CSS for rapid UI development. Optimized for performance and user experience, offering seamless product discovery, cart management, and checkout.",
        technology:["API","REDUX TOOLKIT","REACT","TAILWIND"],
        deployLink:"https://ecommerce-reactjs-harsh.netlify.app/"
    },
    {
        image:realEstate,
        name:"RentIt - Real Estate",
        discription:"Intuitive Real Estate platform, built using React.js and enhanced with the Context API for seamless state management. Our website features a modern and responsive design powered by Tailwind CSS, ensuring an exceptional user experience on any device.",
        technology:["CONTEXT API","REACT","TAILWIND"],
        deployLink:"https://realestate-reactjs-harsh.netlify.app/"
    },
]

export {projectsAssets}