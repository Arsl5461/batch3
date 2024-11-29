import React,{useEffect, useState} from 'react'
import { toast } from 'react-toastify';

const Counter = () => {
  
    const [counter,setCounter]=useState(0);

    const add=()=>{
      if(counter<(10)){
        setCounter(counter+1)
      }
      else{
        toast.warning("you are transjender")
      }
      setCounter(counter+1)
    }

    const substract=()=>{
      if(counter>(1)){
        setCounter(counter-1)
      }
      else{
        toast.warning("you are shemale")
      }
      setCounter(counter-1)
    }

  return (
    <div>
     <button className='btn btn-danger' onClick={substract}>-</button> 
      {counter}
    <button className='btn btn-primary' onClick={add}>+</button>
    </div>
    
  )
}

export default Counter