
import { MoreBookingCard } from "./morebookingcard"
import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import './morebookings.css'

export const MoreBookings = () => {

    const [selectedRooms , setSelectedRooms] = useState([]);
    const { selectedDates } = useParams();
    const roomDetails = [
        {
            id: 1,
            name: 'Cabana',
            description: 'Room 1 description',
            image: 'https://images.squarespace-cdn.com/content/v1/51d53179e4b05a25fc1a5cbe/1582837127004-C83X6WUHI0YL68LUHXY5/eco-based-wooden-cabanas-srilanka.jpg',
            price: 10000,
            maximumGuests: 2,
            bookedDates : ['1-1-2024','4-1-2024','3-1-2024']
            },
            {
            id: 2,
            name: 'Cotage Room',
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/405278972.jpg?k=b39815779a9d28eaca41e1a20c423cf803597a3244f2f6835a7e4e30517d76af&o=&hp=1",
            description: 'Room 2 description',
    
            price: 9500,
            maximumGuests: 3,
            bookedDates : ['3-1-2024','10-1-2024','6-1-2024']
            },
            {
            id: 3,
            name: 'Lakeside Cabana',
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/c0/6a/e1/lakeside-cabana-tissamaharama.jpg?w=1200&h=-1&s=1",
            description: 'Room 3 description',
            price: 8600,
            maximumGuests: 2,
            bookedDates : ['1-1-2024','20-1-2024','13-1-2024']
            }
            ,
            {
            id: 4,
            name: 'Deluxe Room',
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/405278972.jpg?k=b39815779a9d28eaca41e1a20c423cf803597a3244f2f6835a7e4e30517d76af&o=&hp=1",
            description: 'Room 4 description',
            price: 7500,
            maximumGuests: 4,
            bookedDates : ['13-1-2024']
            },
            
            
           
      ]
      const selectedDatesArray = selectedDates.split(',');
      console.log(selectedDatesArray);

      const handledSelectRoom = ({roomNumber}) => {
        const statusOfTheRoom = selectedRooms.some(x => x.roomNumber === roomNumber);
        if (statusOfTheRoom) {
            selectedRooms.splice(selectedRooms.findIndex(x => x.roomNumber === roomNumber), 1);
        }
        else {
            selectedRooms.push({roomNumber});
        }
        console.log(selectedRooms);
      }

      const findStatus = (bookedDates) => {
        const status = !selectedDatesArray.some(x => bookedDates.includes(x))
        return status;

      }

   
  const decodedDates = selectedDates ? selectedDates.split(',').map(date => decodeURIComponent(date)) : [];
  console.log(decodedDates);

    return (
        <div className="background">
        <h3 className="heading">Select Your resorts</h3>
        <div className="morebooking-cards">
        {
            roomDetails.map( room => {
               return ( 
                <div className = "card-division">
                
                <MoreBookingCard
                    roomNumber={room.id}
                    roomName={room.name}
                    
                    image={room.image}
                    simpleDescription={room.description}
                    price={room.price}
                    maximumGuests={room.maximumGuests}
                    status={findStatus(room.bookedDates)}
                    onButtonClick={handledSelectRoom}
                />
                </div>
               )
            })
        }
        </div>
        </div>
    )
}