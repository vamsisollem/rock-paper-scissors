import React from 'react'
import rock from '/images/icon-rock.svg';
import paper from '/images/icon-paper.svg';
import scissors from '/images/icon-scissors.svg';
import { useStore } from './store';
import { useNavigate } from 'react-router-dom';

function Choices() {
    const {setUserChoice, setRules} = useStore();
    const navigate = useNavigate();

    const handleWinner = (choice)=>{
        setUserChoice(choice);
        navigate('/winner')
    }
  return (
    <div className=' w-full h-fit p-2 md:w-4/5 md:p-5 flex flex-col items-center gap-28 relative'>
        <div className='flex md:justify-evenly justify-between sm:justify-around w-full p-5'>
            <div className='bg-rock w-[100px] h-[100px] md:w-[140px] md:h-[140px] sm:w-[120px] sm:h-[120px] flex justify-center items-center rounded-full z-10 cursor-pointer' onClick={()=>handleWinner('rock')}>
                <div className='bg-circle w-[70px] h-[70px] md:w-[110px] md:h-[110px] sm:w-[90px] sm:h-[90px] flex justify-center items-center rounded-full z-20 hover:border-4 hover:border-outline'>
                <img src={rock} alt="rock" className='w-1/2 h-1/2 md:2/3 md:h-1/2'></img>
                </div>
            </div>
            <div className='bg-paper w-[100px] h-[100px] md:w-[140px] md:h-[140px] sm:w-[120px] sm:h-[120px] flex justify-center items-center rounded-full z-10 cursor-pointer' onClick={()=>handleWinner('paper')}>
                <div className='bg-circle  w-[70px] h-[70px] md:w-[110px] md:h-[110px] sm:w-[90px] sm:h-[90px] flex justify-center items-center rounded-full z-20 hover:border-4 hover:border-outline'>
                <img src={paper} alt="paper" className='w-1/2 h-1/2 md:2/3 md:h-1/2'></img>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <div className='bg-scissors w-[100px] h-[100px] md:w-[140px] md:h-[140px] sm:w-[120px] sm:h-[120px] flex justify-center items-center rounded-full z-10 cursor-pointer' onClick={()=>handleWinner('scissors')}>
                <div className='bg-circle  w-[70px] h-[70px] md:w-[110px] md:h-[110px] sm:w-[90px] sm:h-[90px] flex justify-center items-center rounded-full  z-20 hover:border-4 hover:border-outline'>
                <img src={scissors} alt ="scissors" className='w-1/2 h-1/2 md:2/3 md:h-1/2'></img>
                </div>
            </div>
        </div>
        <div className='bg-triangle bg-center bg-no-repeat md:w-full md:h-full w-3/4 h-3/4 absolute  bottom-[140px] md:bottom-20 -z-1'>
        </div>
        <button className='bg-white w-fit h-fit p-3 rounded-lg shadow-lg m-2 cursor-pointer hover:text-2xl font-bold md:ml-auto z-30' onClick={()=> setRules()}>Rules</button>
    </div>
  )
}

export default Choices
