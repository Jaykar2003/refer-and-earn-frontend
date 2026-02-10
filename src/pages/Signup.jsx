import { useState, useContext } from "react";
import api from "../api";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Signup() {

  const nav = useNavigate();
  const { fetchUser } = useContext(UserContext);
    const [loading,setLoading]=useState(false);

  const [form, setForm] = useState({
    username: "",
    password: "",
    referralCode: ""
  });

  const [error, setError] = useState("");

  const submit = async () => {
    setLoading(true)
    try {
      const payload = { ...form };
      if (!payload.referralCode) delete payload.referralCode;
      console.log(payload)

      const a = await api.post("/users/signup", payload);

      console.log(a)

      await fetchUser();

      // const token = a.data?.token;
      // if (token) {
      //   localStorage.setItem("token", token);
      // }

      nav("/dashboard");

    } catch (err) {
      setLoading(false)
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-wrapper">

      {/* ================= LEFT BRANDING ================= */}
      <div className="auth-left">
        <h1>Start Earning Today 🚀</h1>

        <p>
          Share your referral code with friends and earn commission
          every time they make a purchase.
        </p>

        <ul>
          <li>✔ 5% direct earnings</li>
          <li>✔ 1% indirect earnings</li>
          <li>✔ Unlimited growth</li>
        </ul>
      </div>


      {/* ================= RIGHT FORM ================= */}
      <div className="auth-right">

        <div className="auth-card">

          <h2 className="auth-title">Create Account</h2>

          {error && <p className="error">{error}</p>}

          <input
            className="input"
            placeholder="Username"
            onChange={e =>
              setForm({ ...form, username: e.target.value })
            }
          />

           <input
            className="input"
            placeholder="Email"
            
          />

          <input
            className="input"
            type="password"
            placeholder="Password"
            onChange={e =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <input
            className="input"
            placeholder="Referral Code (optional)"
            onChange={e =>
              setForm({ ...form, referralCode: e.target.value })
            }
          />
          <button
            className="btn"
            onClick={submit}
            disabled={loading}
          >
            {loading ? (
              <span className="spinner"></span>
            ) : (
              "Create Account"
            )}
          </button>

          <div className="auth-footer">
            Already have an account? <Link to="/">Login</Link>
          </div>

        </div>
      </div>
    </div>
  );
}