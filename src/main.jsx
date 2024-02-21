import React from 'react'
import logo from '../src/assets/react.svg' 
function Header() {
  return(
    <div>
        <img src={logo} width={60} height={60} /> 
        <div className='flex bg--slate-200 p-2 w-full items-center'>
          
            <input type='text' className='bg-transparent outline-none'/>
        </div> 
        <div>
          </div>    
    </div>  
)
}