import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import { useAuthContext } from "contexts/AuthContext";

export default function Register() {
  const navigate = useNavigate();

  const { dispatch } = useAuthContext();

  const [state, setState] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    let { username, email, password, confirmPassword } = state;

    username = username.trim();
    email = email.trim();

    if (username.length < 3) {
      return alert("Please Enter Your Full Name");
    }
    //  if ("emailRegex".test(email)) {return alert ("Please enter a valid email Address")}
    if (password.length < 6) {
      return alert("Your Password must be 6 characters long");
    }

    const user = { username, email, password, confirmPassword };

    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("users", users);

    if (password !== confirmPassword) {
      return message.error("Passwords do not match");
    }

    let isFound = users.find((u) => u.email === user.email);

    if (!isFound) {
      users.push(state);
      message.success("User has Successfully Registered");
    } else {
      message.warning("User is already registered");
    }

    localStorage.setItem("users", JSON.stringify(users));
    // console.log("users", users);
    navigate("/auth/login");
  };
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="signup-container">
              <h2>Sign Up</h2>
              <form className="signup-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  onChange={handleChange}
                />

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  onChange={handleChange}
                />

                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  onChange={handleChange}
                />

                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={handleChange}
                  required
                />
                <input type="submit" value="Sign Up" />
              </form>

              <p className="login-link">
                Already have an account? <Link to="/auth/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
