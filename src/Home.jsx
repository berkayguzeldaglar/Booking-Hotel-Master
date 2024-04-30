import Slider from './Slider'
import SliderRooms from './SliderRooms'
import SliderComment from './SliderComment'
import { useNavigate, Link, Outlet } from 'react-router-dom';
import { supabase } from "./main";
import { useContext } from "react";
import { UserContext } from "./App";

export default function Home() {
    const {user, setUser, startDate, setStartDate, endDate, setEndDate} = useContext(UserContext)
    const navigate = useNavigate();

    async function handleReserve(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);

        setStartDate(new Date(formObj.checkin))
        setEndDate(new Date(formObj.checkout))

        navigate('/booking')

    } 

    return (
        <>
        <Slider/>
      <form onSubmit={handleReserve} className='check'>
        <div>
          <p>Check In</p>
          <input name='checkin' type="date" />
        </div>
        <div>
          <p>Check Out</p>
          <input  name='checkout' type="date" />
        </div>
        <div>
          <p>Adult</p>
          <input type="number" defaultValue={0} />
        </div>
        <div>
          <p>Children</p>
          <input type="number" defaultValue={0} />
        </div>
      
        <button>Check Availability</button>
      </form>
      <div className="services">
        <div>
          <img src="./img/family.jpg" alt="family" />
          <h3>PERFECT FOR RELAXİNG</h3>
          <div></div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque praesentium alias blanditiis nesciunt consectetur aspernatur!</p>
        </div>
        <div>
          <img src="./img/column-service.jpg" alt="column-service" />
          <h3>PERFECT FOR RELAXİNG</h3>
          <div></div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque praesentium alias blanditiis nesciunt consectetur aspernatur!</p>
        </div>
        <div>
          <img src="./img/bg-2.jpg" alt="bg-2" />
          <h3>PERFECT FOR RELAXİNG</h3>
          <div></div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque praesentium alias blanditiis nesciunt consectetur aspernatur!</p>
        </div>
      </div>
      <div className="rooms">
        <h1>HOTEL MASTER'S ROOMS</h1>
        <div>
         <SliderRooms /> 
        </div>
      </div>
      <div className="news">
        <div className="news-content">
          <h3>NEWS FROM US</h3>
          <div className='line'></div>
          <div className='blog'>
            <div className="blog-date">
              <h3>3</h3>
              <p>DEC</p>
            </div>
            <div className="blog-content">
            <h5>Magna pars studiorum</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, veniam molestiae pariatur rerum iure quidem.</p>
            </div>
          </div>

          <div className='blog'>
            <div className="blog-date">
              <h3>23</h3>
              <p> NOV</p>
            </div>
            <div className="blog-content">
            <h5>Magna pars studiorum</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, veniam molestiae pariatur rerum iure quidem.</p>
            </div>
          </div>

          

          
        </div>
        <div className="gallery-container">
          <h3>GALLERY</h3>
          <div className='line'></div>
        <div className="gallery">
          
          <img src="./img/gallery-1.jpg" alt="gallery-1" />
          <div className='gallery-bottom'>
            <img src="./img/gallery-2.jpg" alt="gallery-2" />
            <img src="./img/gallery-3.jpg" alt="gallery-3" />
            <img src="./img/gallery-4.jpg" alt="gallery-4" />
            <img src="./img/room-1.jpg" alt="gallery-5" />
            
          </div>

        </div>
        </div>
      </div>
      <div className="comment-container">
        <h3>TESTIMONIAL</h3>
        <SliderComment/>
      </div>
        
        </>

    )
}