
import React, {useState} from 'react';
import './morebookingcard.css'; 

export const MoreBookingCard = ({roomNumber, roomName, image, maximumGuests, simpleDescription, price, status, onButtonClick}) => {

    
    const [selected, setSelected] = useState(false);
    const backgroundImageStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const handledButtonClick = () => {
        if (status === false) {
            alert('Room not available');
            return;
        }
        
        onButtonClick({roomNumber});
        if (selected) {
            setSelected(false);
            return;
        }
        setSelected(true);
    }


    

    return (
        <div class="flip-card">
            {selected && <span class="ribbon"> Selected</span>}
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={image} alt="Avatar" style={{width:"300px" , height:"200px", borderTopLeftRadius: "12px", borderTopRightRadius : "12px"}}/>
                </div>
                <div class="flip-card-back">
                    <h1>{roomName}</h1>
                    <h3>Room {roomNumber}</h3>
                    
                    <p className="maximumguests">Maximum Guests: {maximumGuests}</p>
                    <p className="room-description">{simpleDescription}</p>
                    <p className="room-price">Rs.{price}</p>
                   {status ? <p className = "available">Available</p> : <p className = "unavailable">Not Available on Your Dates</p>}
                   <button  onClick = {handledButtonClick}className = "selectthisroom">{status ? selected ? "Deselect This Room" : "Select this room": "not available" }</button>   
                    
                </div>
             </div>
             <div>
                    
             </div>

             <h1 className= "card-footer">{roomName}</h1>
        </div>

    );
}


