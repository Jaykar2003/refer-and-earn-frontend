import { useContext } from "react";
import Navbar from "../Navbar";
import { UserContext } from "../context/UserContext";

export default function Earnings(){

  const { user } = useContext(UserContext);

  return (
  <div>
    <Navbar />

    <div className="page">
      <h2>Earnings</h2>

      <div className="grid">

        <div className="card">
          <h3>Direct Earnings</h3>
          <p>₹{user?.directEarnings ?? 0}</p>
        </div>

        <div className="card">
          <h3>Indirect Earnings</h3>
          <p>₹{user?.indirectEarnings ?? 0}</p>
        </div>

        <div className="card">
          <h3>Total Earnings</h3>
          <p>₹{user?.totalEarnings ?? 0}</p>
        </div>

      </div>
    </div>
  </div>
);
}