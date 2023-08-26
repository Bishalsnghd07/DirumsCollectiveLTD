import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'


import Home from './components/Home'
import Header from './components/Header'
import Card from './components/Card';
import SearchResult from './components/SearchResult'
import VideoDetails from './components/VideoDetails'
import { AppContext } from './context/contextApi'
import LeftNav from './components/LeftNav';

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
      <div className='flex flex-col h-full'>
         <Header />
         <Routes>
         <Route path="/" exact element={<Home />} />
         {/* <Route path="/Card" exact element={<Card />} /> */}
         </Routes>
      </div>
      </BrowserRouter>
      </AppContext>
  )
}

export default App;