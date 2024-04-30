import React, { createContext, useEffect, useState } from 'react'
  
import { useNavigate, Link, Outlet } from 'react-router-dom';
import { supabase } from './main';

export const UserContext = createContext(null);


function App() {
  const [user, setUser] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  
  useEffect(() => {
    async function fetchUser() {

      const { data: { user } } = await supabase.auth.getUser();
      if(user) {
        setUser(user)
      }

    }
    fetchUser();
  }, [])

  async function handleLogout(e) {
    
    let { error } = await supabase.auth.signOut();
    setUser(null)

  }

  return (
    <div className="fullpage">
      <div className="header">
        <Link to={'/'}><img src="./img/logo.png" alt="logo" /></Link>
        <>
          {user === null ? <Link to={'/authentication'}>Login / Register</Link> :
          <>
            <div className=""><p>{user.email}</p> <p>/</p> <p style={{cursor: 'pointer'}} onClick={handleLogout}>Logout</p></div>
          </>
          }
        </>
      </div>
      <UserContext.Provider value={{user, setUser,startDate, setStartDate,endDate, setEndDate}}>
        <Outlet />
      </UserContext.Provider>
      <div className="footer-top">
        <div>
          <h3>BOOK NOW!</h3>
          <ul>
            <li> <i className="fa-solid fa-phone"></i> +1800-222-3333</li>
            <li> <i className="fa-solid fa-envelope"></i> sales@hotelmastert.com</li>
            <li>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-square-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-square-google-plus"></i>
              <i className="fa-brands fa-square-pinterest"></i>
            </li>
          </ul>
        </div>
          
        <div>
          <h3>RECENT NEWS</h3>
            <ul>
              <li> <i className="fa-solid fa-angle-right"></i> Lorem ipsum dolor sit.</li>
              <li> <i className="fa-solid fa-angle-right"></i> Lorem ipsum dolor sit.</li>
              <li> <i className="fa-solid fa-angle-right"></i> Lorem ipsum dolor sit.</li>
              <li> <i className="fa-solid fa-angle-right"></i> Lorem ipsum dolor sit.</li>
              <li> <i className="fa-solid fa-angle-right"></i> Lorem ipsum dolor sit.</li>
              <li> <i className="fa-solid fa-angle-right"></i> Lorem ipsum dolor sit.</li>
          </ul>
        </div>

        <div>
          <h3>OUR REWARDS</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium molestias nesciunt nemo ipsam dicta, dolores rem tenetur ducimus ad, ipsa quisquam quod voluptatum soluta labore accusamus laborum similique perspiciatis autem.</p>
        </div>

      </div>
      <div className="footer-bottom">
        <div>
          <p>Home</p>
          <p>Booking</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <h5>Copyright 2015 All Right Reserved</h5>
      </div>
    </div>
  )
}

export default App