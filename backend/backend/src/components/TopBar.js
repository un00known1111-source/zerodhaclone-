import React, { useState } from "react";
import Menu from "./Menu";

const TopBar = ({ username, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
          {username && (
            <div style={{ position: "relative", marginRight: "20px" }}>
              <button 
                onClick={toggleDropdown}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #ddd",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "600",
                  color: "#666",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                {username.toUpperCase()} <span style={{ marginLeft: "5px", fontSize: "10px" }}>▼</span>
              </button>
              
              {isOpen && (
                <div style={{
                  position: "absolute",
                  top: "100%",
                  right: "0",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  borderRadius: "4px",
                  marginTop: "8px",
                  zIndex: 1000,
                  width: "150px",
                  border: "1px solid #eee"
                }}>
                  <div style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                    <p style={{ margin: 0, fontSize: "12px", color: "#999" }}>User ID</p>
                    <p style={{ margin: 0, fontWeight: "600", color: "#444" }}>{username}</p>
                  </div>
                  <div style={{ padding: "8px 0" }}>
                    <div className="dropdown-item" style={{ padding: "8px 12px", cursor: "pointer", fontSize: "14px", color: "#444" }}>My Profile</div>
                    <div className="dropdown-item" style={{ padding: "8px 12px", cursor: "pointer", fontSize: "14px", color: "#444" }}>Console</div>
                    <div className="dropdown-item" style={{ padding: "8px 12px", cursor: "pointer", fontSize: "14px", color: "#444" }}>Coin</div>
                  </div>
                </div>
              )}
            </div>
          )}
          
          <Menu />
          
          {username && (
              <button 
                onClick={onLogout}
                style={{ 
                    marginLeft: "20px", 
                    padding: "5px 15px", 
                    backgroundColor: "#f44336", 
                    color: "white", 
                    border: "none", 
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "14px"
                }}
              >
                Logout
              </button>
          )}
      </div>
    </div>
  );
};

export default TopBar;