import React from 'react'
import { useStore } from './store';
import { useNavigate } from 'react-router-dom';
function WinnerBoard() {
    const{result, userChoice, houseChoice} = useStore();
    const navigate = useNavigate();

    const playAgain = ()=>{
        navigate('/');
    }
  return (
    <div className='flex w-full h-fit justify-evenly items-center flex-wrap'>
      <div className='md:p-5 md:m-2 order-1 md:order-1'>
        <h2 className='text-center font-bold text-white p-3'>You picked</h2>
        <div className={`bg-${userChoice} w-[100px] h-[100px] md:w-[180px] md:h-[180px] flex justify-center items-center rounded-full z-10 cursor-pointer`}>
                <div className='bg-circle w-[70px] h-[70px] md:w-[150px] md:h-[150px] flex justify-center items-center rounded-full hover:border-4 hover:border-outline'>
                <img src={`/images/icon-${userChoice}.svg`} alt={userChoice} />
                </div>
        </div>
      </div>
      <div className='md:p-5 md:m-2 flex flex-col justify-center order-3 md:order-2'>
        <h2 className='text-2xl md:text-5xl text-white font-bold m-2'>{result}</h2>
        <button className='bg-white w-full h-fit p-3 rounded-lg shadow-lg m-2 hover:text-2xl font-bold' onClick={()=>playAgain()}>Play Again</button>
      </div>
      <div className='md:p-5 md:m-2 order-2 md:order-3'>
        <h2 className='text-center font-bold text-white p-3'>House Picked</h2>
        <div className={`bg-${houseChoice}  w-[100px] h-[100px] md:w-[180px] md:h-[180px] flex justify-center items-center rounded-full z-10 cursor-pointer`}>
                <div className='bg-circle w-[70px] h-[70px] md:w-[150px] md:h-[150px] flex justify-center items-center rounded-full hover:border-4 hover:border-outline'>
                <img src={`/images/icon-${houseChoice}.svg`} alt={houseChoice} />
                </div>
        </div>
      </div>
    </div>
  )
}

export default WinnerBoard
