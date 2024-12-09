import React from 'react'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
const Experience = () => {
  return (
    <div id='Experience' className='p-10 md:p-24 '>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>
            Experience
      </h1>
      <div className='flex flex-wrap items-center justify-around '>
        <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>


           <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
          <img src={html} alt="img" class="w-8 h-8" />
          <p>HTML</p>
           </span>
            
           <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
         <img src={css} alt="img" class="w-8 h-8"  />
         <br />
         <p>CSS</p>
           </span>
           <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
         <img src={js} alt="img" class="w-8 h-8" /> <br />
         <p>Javascript</p>
           </span>
           <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
         <img src={react} alt="img"  class="w-8 h-8" /> <br />
         <p>React Js</p>
           </span>
        </div>
        
        <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
          
           <span className='text-white'>
            <h2 className='leading-tight'>
                React Developer
            </h2>
             <p className='text-sm leading-tight  font-thin'> 1st November 2022 -- Present </p>
             <ul  className='text-sm p-2'>
               <li>work as Frontend Developer</li>
             </ul>
           </span>
        </div>
      </div>
    </div>
  )
}

export default Experience
