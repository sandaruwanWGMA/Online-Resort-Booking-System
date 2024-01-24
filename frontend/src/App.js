
import './App.css';
import React, { useState } from 'react';
import BookingCalendar from './bookingcalender';
import SelectRoomComponent from './selectroom';
import 'react-calendar/dist/Calendar.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MoreBookings } from './morebookings';
import {BookingPage} from './bookingpage';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/select-dates" element={<BookingPage />} />
          <Route path="/selectroom/:selectedDates" element={<SelectRoomComponent />} />
          <Route path="/moreselections/:selectedDates" element={<MoreBookings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
