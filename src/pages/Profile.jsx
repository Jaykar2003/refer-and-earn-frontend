import { useContext } from "react";
import Navbar from "../Navbar";
import { UserContext } from "../context/UserContext";

export default function Profile() {

  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar />

      <div className="page">
        <h2>Profile</h2>

        <div className="grid">
          <div className="card">
            <h3>User ID</h3>
            <p>{user?._id}</p>
          </div>

          <div className="card">
            <h3>Referral Code</h3>
            <p>{user?.referralCode}</p>
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
