import React from 'react'
import about from '../../assets/bt.png'

const About = () => {
  return (
    <div className='text-white md:flex  gap-8 overflow-hidden items-center flex flex-wrap md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div>
        <h2 className='text-2xl md:text-4xl justify-center font-bold '>
          About
        </h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
          <img className='md:h-80' src={about} alt="abt" />
           <br />
           <br />
          <ul>
            <div className='flex gap-3 py-4'>
            <h1 class="text-3xl justify-center font-bold mb-2">😊
              <br />
              😊
              <br />
              😊
              <br />
              😊
              <br />
              😊
            </h1>
                <span className='w-96'>
                     <h1 className='text-xl md:text-2xl font-semibold leading-normal'>
                      Frontend Developer
                     </h1>
                     <p className='text-l md:text-md leading-tight'>
                     Hello! I'm a dedicated and creative frontend developer with a knack for bringing stunning designs to life. With expertise in HTML, CSS, JavaScript, and modern framework like React, I specialize in building responsive, user-friendly, and visually captivating web applications.I'm here to turn your vision into reality. Let's create something amazing together!
                     </p>
                </span>
            </div>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
