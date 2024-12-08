import React from 'react'
import { useNavigate } from 'react-router-dom';
function RulesButton() {
    const navigate = useNavigate();

    const knowRules = ()=>{
        navigate('/winner')
    }
  return (
    <div className='ml-auto cursor-pointer'>
      <button className='bg-white w-fit h-fit p-3 rounded-lg shadow-lg m-2 hover:text-2xl font-bold' onClick={()=> knowRules()}>Rules</button>
    </div>
  )
}

export default RulesButton
