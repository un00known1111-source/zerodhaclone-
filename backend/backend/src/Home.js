import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "./components/Dashboard";
import TopBar from "./components/TopBar";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:3005",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        if (!status) {
          removeCookie("token");
          window.location.href = "http://localhost:3000/login";
        } else {
          setUsername(user);
          // Only show toast if we just arrived or username changed
          toast(`Welcome back, ${user}!`, {
              position: "top-right",
              autoClose: 3000
          });
        }
      } catch (error) {
        console.error("Verification failed:", error);
        window.location.href = "http://localhost:3000/login";
      }
    };
    verifyCookie();
  }, [removeCookie]);

  const Logout = () => {
    removeCookie("token");
    window.location.href = "http://localhost:3000/login";
  };

  return (
    <>
      <TopBar username={username} onLogout={Logout} />
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;