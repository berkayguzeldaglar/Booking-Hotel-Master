import { useContext, useState, useEffect } from "react";
import { UserContext } from "./App";
import { supabase } from "./main";
import { useNavigate } from "react-router-dom";

export default function Booking() {

    const {user, setUser,startDate, setStartDate,endDate, setEndDate} = useContext(UserContext);
    const [pageOrder, setPageOrder] = useState(1);
    const [allReservation, setAllReservation] = useState(null);
    const [roomsData, setRoomsData] = useState(null);
    const [selectedRoomID, setSelectedRoomID] = useState(null);
    const [selectedRoomName, setSelectedRoomName] = useState(null);
    const [selectedReservationDays, setSelectedReservationDays] = useState(null);
    const [selectedRoomTotalPrice, setSelectedRoomTotalPrice] = useState(null);
    const [selectedRoomPrice, setSelectedRoomPrice] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setSelectedReservationDays(Math.ceil((endDate - startDate) / (24 * 60 * 60 * 1000)))
    }, [])

    useEffect(() => {
        async function fetchData() {
            const { data: reservations, error } = await supabase
                .from('reservation')
                .select('*')

                setAllReservation(reservations ? reservations : null);

                let { data: rooms } = await supabase
                .from('rooms')
                .select('*')
                setRoomsData(rooms ? rooms : null);
        }
        fetchData()
    }, [])

    async function handleSelected(roomId, roomName, roomPrice) {
        setSelectedRoomID(roomId);
        setPageOrder(2);
        setSelectedRoomName(roomName)
        setSelectedRoomTotalPrice(selectedReservationDays * roomPrice)
        setSelectedRoomPrice(roomPrice)
    }

    async function payNow(e) {
        e.preventDefault();
        
        const { data, error } = await supabase
        .from('reservation')
        .insert([
            {
                user_id: user.id,
                room_id: selectedRoomID,
                checkin: startDate,
                checkout: endDate,
                total: selectedRoomTotalPrice,
                status: 'başarılı'
            }
        ])
        .select()

        if(!error) {
            alert('REZERVASYON İŞLEMİ BAŞARILI!')
            navigate('/')
        }

    }

    return (
        <div className="outlet-page">
            <div className="progress">
                
                <div className="step">
                    <p>1.Choose Date</p>
                    <p style={pageOrder === 1 ? {color: '#fff'} : {}}>2.Choose Room</p>
                    <p style={pageOrder === 2 ? {color: '#fff'} : {}}>3.Make a Reservation</p>
                    <p style={pageOrder === 3 ? {color: '#fff'} : {}}>4.Confirmation</p>
                </div>

                <div className="progress-step">

                    {pageOrder === 1 &&
                    <div className="rooms-selected">

                        {roomsData?.map(x => (
                            <div className="rooms-content" key={x.room_id}>
                                <img src={
                                    x.room_id === 1 && 'https://demo.goodlayers.com/hotelmaster/dark/wp-content/uploads/2015/03/photodune-3973259-hotel-room-m-400x300.jpg' ||
                                    x.room_id === 2 && 'https://demo.goodlayers.com/hotelmaster/dark/wp-content/uploads/2015/03/photodune-2676493-suite-bed-room-with-balcony-of-a-luxury-resort-m-400x300.jpg' ||
                                    x.room_id === 3 && 'https://demo.goodlayers.com/hotelmaster/dark/wp-content/uploads/2015/03/photodune-3973289-hotel-room-m-400x300.jpg' ||
                                    x.room_id === 4 && 'https://demo.goodlayers.com/hotelmaster/dark/wp-content/uploads/2015/03/photodune-2681114-penthouse-room-on-a-sunny-day-m-400x300.jpg' ||
                                    x.room_id === 5 && 'https://demo.goodlayers.com/hotelmaster/dark/wp-content/uploads/2015/03/photodune-2232283-hotel-room-with-bed-and-wooden-m-400x300.jpg'
                                    } alt="room-4" /> 
                                <div>
                                    <h1>{x.name}</h1>
                                    <p style={{padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)'}}>{x.subtitle}</p>
                                    <p style={{color: 'rgba(255, 255, 255, 0.4)'}}>{x.content}</p>
                                    <h3>{x.price}$ / Night</h3>
                                    <button onClick={() => handleSelected(x.room_id , x.name, x.price)}>Selected this room</button>
                                </div>
                            </div>
                        ))}

                    </div>}

                     {pageOrder === 2 &&
                     <div className="make-reservation">
                        <form>
                            <div>
                                <input type="text" placeholder="Name"/>
                                <input type="text" placeholder="Last Name" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email"/>
                                <input type="number" placeholder="Phone" />
                            </div>
                            <textarea name="" placeholder="Additional Note" cols="30" rows="10"></textarea>
                            <button onClick={() => (setPageOrder(3))}>Pay Now</button>
                        </form>
                     </div>
                     }

                    {pageOrder === 3 &&
                     <div className="payment">

                        <h1>Your Reservation</h1>
                        
                        <div className="full-line"></div>

                        <div>
                            <h3>Price Breakdown</h3>
                            <h6>{selectedRoomName}</h6>
                        </div>

                        <div className="full-line"></div>

                        <div>
                            <p>Total <span>${selectedRoomPrice}.00</span></p>
                        </div>

                        <div className="full-line"></div>

                        <div style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <h3>Grand Total</h3>
                            <h3>${selectedRoomTotalPrice}</h3>
                        </div>

                        <button onClick={payNow}>Pay Now</button>
                        
                     </div>
                     }

                </div>

            </div>
        </div>
    )
}