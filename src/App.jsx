
import React from 'react'
import logo from '/images/logo.svg';
import Choices from './components/Choices';
import { useStore } from './components/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import WinnerBoard from './components/WinnerBoard';
import Rules from './components/Rules';
import RulesButton from './components/RulesButton';
function App() {
  const {score} = useStore();
  return (
    <div className='bg-background min-h-screen flex flex-col items-center p-5'>
      <div className='border-outline border-2 flex w-2/5 h-fit rounded-lg p-3 items-center'>
        <div className='w-3/4'><img src={logo} alt='rock paper scissors' className='w-fit h-fit'></img></div>
        <div className='bg-white w-1/4 h-fit flex flex-col  items-center rounded-lg'>
          <h2 className='text-2l text-score p-1'>Score</h2>
          <span className='text-6xl text-darkText p-2'>{score}</span>
        </div>
      </div>

      <Router>
        <Routes>
          <Route path='/' element={<Choices />}></Route>
          <Route path='/winner' element={<WinnerBoard />}></Route>
          <Route path='/rules' element={<Rules />}></Route>
        </Routes>
      </Router>
      
    
    </div>
  )
}

export default App
