import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function App() {
  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Select the Visiting Date</h1>
      <Calendar onChange={onChange} value={date} />
      <p>Selected date: {date.toDateString()}</p>
    </div>
  );
}

export default App;
