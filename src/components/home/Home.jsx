import React from 'react'
import image from '../../assets/pic.png.jpg'
import Textchanger from '../../../Textchanger'
const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20      text-white md:flex  gap-8 overflow-hidden items-center flex flex-wrap md:flex-wrap md:justify-center   mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div className='md:w-2/4 md:pt-10'>
         <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
          <Textchanger/>
         </h1>
         <br />
         <p className='text-sm md:text-2xl tracking-tight'>
         A passionate and skilled frontend developer with a keen eye for design and user experience. Proficient in HTML, CSS, JavaScript, and modern framework like React.Adept at creating responsive, intuitive, and dynamic web applications that delight users.
         </p>
         <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-86 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact Me</button>
        
         </div>
         <img  className='md:h-80 rounded-lg' src={image} alt="img" />
      <div>
     
      </div>
    </div>
  )
}

export default Home
