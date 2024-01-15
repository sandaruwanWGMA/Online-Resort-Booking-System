
import React from 'react';
import './roomcard.css'; 

export const RoomCard = (props) => {

    const backgroundImageStyle = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    };

    return (
        <div className="room-card" style={backgroundImageStyle}>
            <h1>{props.roomName}</h1>
            <h3>Room {props.roomNumber}</h3>
            
            <p className="maximumguests">Maximum Guests: {props.maximumGuests}</p>
            <p className="room-description">{props.simpleDescription}</p>
            <p className="room-price">Rs.{props.price}</p>
           {props.status ? <p className = "available">Available</p> : <p className = "unavailable">Not Available on Your Dates</p>}
          
        </div>
    );
}


