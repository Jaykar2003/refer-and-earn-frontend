import { useContext } from "react";
import Navbar from "../Navbar";
import { UserContext } from "../context/UserContext";

export default function Referrals() {

  const { user } = useContext(UserContext);

  const used = user?.referrals?.length || 0;
  const total = 8;
  const percent = (used / total) * 100;

  return (
    <div>
      <Navbar />

      <div className="page">
        <h2>Referrals</h2>

        <div className="grid">

          <div className="card">
            <h3>Slots Used</h3>
            <p>{used}/{total}</p>
          </div>

          <div className="card">
            <h3>Available Slots</h3>
            <p>{total - used}</p>
          </div>

        </div>

       
        <div className="card" style={{ marginTop: "25px" }}>
          <h3>Referral Progress</h3>

          <div className="progress">
            <div
              className="progress-fill"
              style={{ width: `${percent}%` }}
            />
          </div>

          <p style={{ marginTop: "8px" }}>
            {percent.toFixed(0)}% filled
          </p>
        </div>

      </div>
    </div>
  );
}
