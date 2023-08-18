import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import das pages
import Events from './Pages/Events';
import NewEvent from './Pages/NewEvent';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Events />} />
        <Route path='/new-event' element={<NewEvent />} />
      </Routes>
    </BrowserRouter>
  )
}
