// BookingPage.js

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingPage = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleBookingSubmit = () => {
    // Perform booking submission logic here using startDate and endDate
    console.log('Booking submitted:', startDate, endDate);
  };

  return (
    <div>
      <h2>Booking Page</h2>
      <div>
        <label>Check-in Date:</label>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <div>
        <label>Check-out Date:</label>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </div>
      <button onClick={handleBookingSubmit}>Submit Booking</button>
    </div>
  );
};

export default BookingPage;
