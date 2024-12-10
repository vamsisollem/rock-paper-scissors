
import React from 'react'
import logo from '/images/logo.svg';
import gameInfo from '/images/image-rules.svg';
import Choices from './components/Choices';
import { useStore } from './components/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import WinnerBoard from './components/WinnerBoard';


function App() {
  const {score,rules, setRules} = useStore();
  return (
    <div className='bg-background min-h-screen flex flex-col items-center p-5'>
      <div className='border-outline border-2 flex justify-between w-full h-fit rounded-lg items-center p-3 md:w-3/5'>
        <div className='w-2/5'><img src={logo} alt='rock paper scissors' className='w-fit h-fit'></img></div>
        <div className='bg-white w-1/5 h-full flex flex-col  items-center rounded-lg'>
          <h2 className='text-2l text-score p-2 sm: text-1l'>Score</h2>
          <span className='text-6xl text-darkText p-3 sm: text-4xl'>{score}</span>
        </div>
      </div>
  {rules === false ? (
    <Router>
    <Routes>
      <Route path='/' element={<Choices />}></Route>
      <Route path='/winner' element={<WinnerBoard />}></Route>
    </Routes>
  </Router>
  ): (
    <div className='p-10 m-10'>
    <img src={gameInfo} alt='rules' className='w-full h-full'></img>
    <button className='bg-white w-fit h-fit p-3 rounded-lg shadow-lg m-2 hover:text-2xl font-bold float-right' onClick={()=>setRules()}>Back</button>
  </div>
  )}
</div>
  )
}

export default App
