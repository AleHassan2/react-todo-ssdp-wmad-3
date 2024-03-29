// import React from 'react'
import { Link } from "react-router-dom";
import { useAuthContext } from "contexts/AuthContext";
import React from "react";

export default function Header() {
  const { dispatch, isAuth, user } = useAuthContext();

  const handleLogout = () => {
    dispatch({ type: "SET_LOGGED_OUT" });
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
          <Link to="/dashboard/" className="navbar-brand">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/dashboard/contact" className="nav-link">
                  contact Us
                </Link>
              </li>
            </ul>
            {isAuth && (
              <span id="" className="text-white">
                {" "}
                Welcome Back __ {user.username}!{" "}
              </span>
            )}

            <button
              onClick={handleLogout}
              className="btn btn-outline-danger"
              type="submit"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
