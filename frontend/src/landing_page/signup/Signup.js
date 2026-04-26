import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL || "http://localhost:3005"}/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = data.redirectUrl || "http://localhost:3001";
        }, 1500);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="form_container" style={{
        padding: "100px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#fbfbfb"
    }}>
      <div style={{
          backgroundColor: "#fff",
          padding: "40px 60px",
          borderRadius: "10px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
          width: "450px"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "28px", color: "#444" }}>Signup Account</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#666" }}>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
              style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  fontSize: "16px"
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#666" }}>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={handleOnChange}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                fontSize: "16px"
            }}
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <label htmlFor="password" style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#666" }}>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                fontSize: "16px"
            }}
            />
          </div>
          <button type="submit" style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#387ed1",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background-color 0.3s"
          }}>Submit</button>
          <span style={{ display: "block", marginTop: "20px", textAlign: "center", color: "#777" }}>
            Already have an account? <Link to={"/login"} style={{ color: "#387ed1", textDecoration: "none" }}>Login</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;