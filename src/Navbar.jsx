import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export default function Navbar() {

  const nav = useNavigate();
  const { user } = useContext(UserContext);

  const logout = () => {
  localStorage.clear();
  nav("/");
};


  return (
    <nav className="navbar">

      {/* LEFT LINKS */}
      <div className="nav-left">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/earnings">Earnings</Link>
        <Link to="/referrals">Referrals</Link>
      </div>

      {/* RIGHT SIDE (username + logout together) */}
      <div className="nav-right">
        <span className="user-name">
          👤 {user?.username}
        </span>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

    </nav>
  );
}
