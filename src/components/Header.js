// import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from 'contexts/AuthContext'
import React, { useState, useEffect } from "react";

export default function Header() {
    const { dispatch , isAuth , user } = useAuthContext()
    
  const handleLogout=()=>{
    dispatch({ type: "SET_LOGGED_OUT"})

  }
  

  // const [username, setUsername] = useState("");

  // useEffect(() => {
  //   // Check if the user is logged in (you may adjust this logic based on your authentication system)
  //   const isLoggedIn =  /* Your logic to check if the user is logged in */;

  //   if (isLoggedIn) {
  //     // Retrieve the username from local storage
  //     const storedUsers = localStorage.getItem("users");

  //     // Check if there are stored users
  //     if (storedUsers) {
  //       // Parse the stored JSON string into an array
  //       const usersArray = JSON.parse(storedUsers);

  //       // Find the first user in the array (you may want to adjust this logic based on your data structure)
  //       const foundUser = usersArray.find(user => user.username);

  //       // If a user is found, set the username
  //       if (foundUser) {
  //         setUsername(foundUser.username);
  //       }
  //     }
  //   }
  // }, []);

  return (
    <header>
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
  <div className="container">
  <Link to="/dashboard/" className="navbar-brand" >Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
        <Link to="" className="nav-link" >Dashboard</Link>
        </li> */}
        <li className="nav-item">
        <Link to="/dashboard/contact" className="nav-link">contact Us</Link>
        </li>
      </ul>
        {isAuth && <span id='' className='text-white' >  Welcome Back__  {user.username}! </span>}
      {/* <span>  </span> */}

        <button  onClick={handleLogout}  className="btn btn-outline-danger" type="submit">Logout</button>
      
    </div>
  </div>
</nav>
    </header>
  )
}
