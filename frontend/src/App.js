
import './App.css';
import React, { useState } from 'react';
import BookingCalendar from './bookingcalender';
import SelectRoomComponent from './selectroom';
import 'react-calendar/dist/Calendar.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MoreBookings } from './morebookings';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/calendar" element={<BookingCalendar />} />
          <Route path="/selectroom/:selectedDates" element={<SelectRoomComponent />} />
          <Route path="/moreselections/:selectedDates" element={<MoreBookings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
