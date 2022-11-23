import React from 'react'
import Data from './Data';
import { Route, Routes } from 'react-router'
import Page404 from './Page404';
import Search from './Search';

export default function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Data/>}/>
        <Route path='/:id' element={<Page404/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </div>
  )
}
