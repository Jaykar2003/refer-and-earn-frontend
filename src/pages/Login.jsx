import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import { UserContext } from "../context/UserContext";

export default function Login() {

  const nav = useNavigate();
  const { fetchUser } = useContext(UserContext);

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false); // ⭐ NEW

  const login = async () => {
    try {
      setLoading(true);       // start loader
      setError("");

      const a = await api.post("/users/login",{username,password});
      
await fetchUser();

      nav("/dashboard");

    } catch {
      setError("Invalid username or password");
    } finally {
      setLoading(false);      //stop loader
    }
  };

  return (
    <div className="auth-wrapper">

      {/* LEFT */}
      <div className="auth-left">
        <h1>Refer & Earn 💸</h1>
        <p>
          Invite friends.  
          Earn commission.  
          Build passive income effortlessly.
        </p>

        <ul>
          <li>✔ 5% direct earnings</li>
          <li>✔ 1% indirect earnings</li>
          <li>✔ Real-time rewards</li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="auth-right">

        <div className="auth-card">

          <h2 className="auth-title">Login</h2>

          {error && <p className="error">{error}</p>}

          <input
            className="input"
            placeholder="Username"
            onChange={e=>setUsername(e.target.value)}
          />

          <input
            className="input"
            type="password"
            placeholder="Password"
            onChange={e=>setPassword(e.target.value)}
          />

          {/* LOADER BUTTON */}
          <button
            className="btn"
            onClick={login}
            disabled={loading}
          >
            {loading ? (
              <span className="spinner"></span>
            ) : (
              "Login"
            )}
          </button>

          <div className="auth-footer">
            Don’t have an account? <Link to="/signup">Signup</Link>
          </div>

        </div>
      </div>
    </div>
  );
}
