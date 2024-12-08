import React from 'react'
import rock from '/images/icon-rock.svg';
import paper from '/images/icon-paper.svg';
import scissors from '/images/icon-scissors.svg';
import { useStore } from './store';
import { useNavigate } from 'react-router-dom';

function Choices() {
    const {setUserChoice} = useStore();
    const navigate = useNavigate();

    const handleWinner = (choice)=>{
        setUserChoice(choice);
        navigate('/winner')
    }
  return (
    <div className='w-full h-full p-5 flex flex-col items-center gap-28'>
        <div className='flex justify-between w-2/5 p-5'>
            <div className='bg-rock w-[140px] h-[140px] flex justify-center items-center rounded-full z-10 cursor-pointer' onClick={()=>handleWinner('rock')}>
                <div className='bg-circle w-[110px] h-[110px] flex justify-center items-center rounded-full hover:border-4 hover:border-outline'>
                <img src={rock} alt="rock"></img>
                </div>
            </div>
            <div className='bg-paper w-[140px] h-[140px] flex justify-center items-center rounded-full z-10' onClick={()=>handleWinner('paper')}>
                <div className='bg-circle w-[110px] h-[110px] flex justify-center items-center rounded-full hover:border-4 hover:border-outline'>
                <img src={paper} alt="paper"></img>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <div className='bg-scissors w-[140px] h-[140px] flex justify-center items-center rounded-full z-10' onClick={()=>handleWinner('scissors')}>
                <div className='bg-circle w-[110px] h-[110px] flex justify-center items-center rounded-full hover:border-4 hover:border-outline'>
                <img src={scissors} alt ="scissors"></img>
                </div>
            </div>
        </div>
        <div className='bg-triangle bg-center bg-no-repeat w-full h-full absolute top-5 -z-1'>
        </div>
    </div>
  )
}

export default Choices
