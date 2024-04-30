import { useContext, useState, useEffect } from "react";
import { UserContext } from "./App";
import { supabase } from "./main";

export default function Booking() {

    const {user, setUser, startDate, setStartDate, endDate, setEndDate} = useContext(UserContext);
    const [pageOrder, setPageOrder] = useState(1);
    const [allReservation, setAllReservation] = useState(null)
    const [roomsData, setRoomsData] = useState(null);
   

    useEffect(() => {
        async function fetchData() {
            const { data: reservations, error } = await supabase
                .from('reservation')
                .select('*')

                setAllReservation(reservations ? reservations : null);

                let { data: rooms } = await supabase
                .from('rooms')
                .select('*')

                //console.log(rooms)
                const availableRooms = getAvailableRooms(rooms,reservations, startDate, endDate);

                console.log(availableRooms);
                setRoomsData(rooms ? rooms : null);
        }
        fetchData()
    }, [])

    function getAvailableRooms(roomsData,allReservation,startDate,endDate) {
        const availableRooms = roomsData.filter(room=>{
            const bookings = allReservation?.filter(reservation=> reservation.room_id === room.room_id);

            return bookings.every(booking =>{
                const checkinDate = new Date(booking.checkin);
                const checkoutDate = new Date(booking.checkout);
                console.log(checkinDate)
                console.log(checkoutDate)

                return (checkinDate > endDate > checkoutDate || checkinDate > startDate > checkoutDate)
            })
        })

        return availableRooms;
    }
    


    function betweenTwoDays(startDate,endDate) {
        const dateArray = [];
        let currentDate = new Date(startDate);

        while(currentDate <= endDate){
            dateArray.push(new Date(currentDate));

            currentDate.setDate(currentDate.getDate()+1);
        }

        return dateArray;
    }

    return (
        <div className="outlet-page">
            <div className="progress">
                
                <div className="step">
                    <p>1.Choose Date</p>
                    <p style={pageOrder === 1 ? {color: '#fff'} : {}}>2.Choose Room</p>
                    <p style={pageOrder === 2 ? {color: '#fff'} : {}}>3.Make a Reservation</p>
                    <p>4.Confirmation</p>
                </div>

                <div className="progress-step">

                    {pageOrder === 1 &&
                    <div className="rooms-selected">

                        {roomsData?.map(x => (
                            <div className="rooms-content" key={x.room_id}>
                                <img src={x.image} alt="room-4" /> 
                                <div>
                                    <h1>{x.name}</h1>
                                    <p style={{padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)'}}>{x.subtitle}</p>
                                    
                                    <p style={{color: 'rgba(255, 255, 255, 0.4)'}}>{x.content}</p>
                                    <h3>{x.price}$ / Night</h3>
                                    <button>Selected this room</button>
                                </div>
                            </div>
                        ))}

                </div>}

                     <div className="payment">
                        <h1>Your Reservation</h1>
                        <div className='line'></div>
                        <div className="room-option">
                            <i className="fa-solid fa-angles-right"></i>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}