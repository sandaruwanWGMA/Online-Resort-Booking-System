import React, { useState } from "react";
import Calendar from "react-calendar";
import {useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import './bookingcalendar.css';



const BookingCalendar = () => {
    const [date, setDate] = useState(new Date());
    const [selectedDates, setSelectedDates] = useState([]);
    const navigate = useNavigate();

    const removeDuplicates = (array) => {
        return array.filter((a, b) => array.indexOf(a) === b)
    }
    

    const handleSelectDay = (selectedDate) => {
       // eslint-disable-next-line no-unused-expressions
      setSelectedDates([...selectedDates, selectedDate.getDate()+"-"+(selectedDate.getMonth()+1)+"-"+selectedDate.getFullYear()])
      console.log("selectedDates : " ,selectedDates);
    }  
    

    const handledResetCalendar = () => {
        setSelectedDates([]);
    }
    const isDateSelected = (date) => {
        const dateAsString = date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
        return selectedDates.includes(dateAsString);
        
     }
    
    const setTileClassNames = ({ date, view }) => {
        const isSelected = isDateSelected(date);
        return view === "month" && isSelected ? "react-calendar__tile--active" : null;
    };

    const sendSelectedDatesToSever = () => {
        
        console.log(removeDuplicates(selectedDates));

        navigate(`/selectroom/${selectedDates.map(date => encodeURIComponent(date)).join(',')}`);
        
    }

    return (
        <div className ="maindiv">
        <h1 className = "title"> Select Your Trip Dates</h1>
        <div>
            
            {/* <style>{styles}</style> */}

            <Calendar
                value={date}
                onChange={setDate}
                view="month"
                onClickDay={handleSelectDay}
                tileClassName={setTileClassNames}
            />
            <div className = "buttons">
            <button className="reset-button" onClick= {handledResetCalendar}>reset</button>
            <button className="submit-button" onClick={sendSelectedDatesToSever}>submit</button>
            </div>
        </div>
        </div>
    );
};

export default BookingCalendar;
