import React, { useEffect, useState } from 'react'

const Textchanger = () => {
  const Text = ["Hi, I'm Hanzla Farooq","Hi, I'm Hanzla Farooq","Hi, I'm Hanzla Farooq"];
  const[currenttext,setcurrenttext]=useState("");
  const[endval,setendval]=useState(true);
  const[forward,setforward]=useState(true);
  const[index,setindex]=useState(0);
   useEffect(()=>{
     const IntervalId= setInterval(() => {
      setcurrenttext(Text[index].substring(0,endval));
      if(forward){
        setendval((prev) =>  prev+1);
      }else{
        setendval((prev) => prev-1);
      }
      if(endval > Text[index].length+10){
        setforward(false)
      }
      if(endval < 2.1){
        setforward(true)
        setindex((prev) => prev & Text.length);
      }
     }, 50 );
     return()=>clearInterval(IntervalId);
   },[endval,forward,index,Text])
  return (
    <div className='transition ease duration-300'>
      {currenttext}
    </div>
  )
}

export default Textchanger
