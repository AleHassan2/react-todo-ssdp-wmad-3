import React, { useState } from "react";
import { message } from "antd";
import { useAuthContext } from "contexts/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
  const { dispatch } = useAuthContext();
  const [state, setState] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    let { email, password } = state;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    // console.log("users", users);
    let user = users.find((user) => user.email === email);

    if (user) {
      if (user.password === password) {
        dispatch({ type: "SET_LOGGED_IN", payload: { user } });
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("user", JSON.stringify(user));

        message.success("You have Logged In Successfully");
      } else {
        message.error("Password isn't valid");
      }
    } else {
      message.error("User not found");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
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

        <input type="submit" value="Login" />
      </form>

      <p className="signup-link">
        Don't have an account? <Link to="/auth/register">Sign Up</Link>
      </p>
    </div>
  );
}
