import React, { useState } from "react";
import Calendar from "react-calendar";
import {useNavigate } from 'react-router-dom';
// import 'react-calendar/dist/Calendar.css';

const styles = `
    .highlight {
        background-color: #3498db;
        color: #343434;
        
    }

`;

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

    const setTileClassNames = ({ date, view }) => {
        return view === "month" && selectedDates.find((x) => x === date) ? "highlight" : null;
    };

    const sendSelectedDatesToSever = () => {
        
        console.log(removeDuplicates(selectedDates));

        //navigate to next page
        navigate(`/selectroom/${selectedDates.map(date => encodeURIComponent(date)).join(',')}`);
        
    }

    return (
        <div>
            
            <style>{styles}</style>

            <Calendar
                value={date}
                onChange={setDate}
                view="month"
                onClickDay={handleSelectDay}
                tileClassName={setTileClassNames}
            />

            <button onClick= {handledResetCalendar}>reset</button>
            <button onClick={sendSelectedDatesToSever}>submit</button>
        </div>
    );
};

export default BookingCalendar;
