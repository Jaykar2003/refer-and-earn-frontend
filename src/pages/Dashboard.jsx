import Navbar from "../Navbar";
import api from "../api";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const products = [
  {
    name: "Gaming Mouse",
    price: 1200,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7"
  },
  {
    name: "Mechanical Keyboard",
    price: 1500,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212"
  },
  {
    name: "Wireless Headset",
    price: 2000,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90"
  },
  {
    name: "HD Webcam",
    price: 1800,
    image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc"
  },
  {
    name: "Laptop Stand",
    price: 900,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
  },

  {
    name: "Gaming Chair",
    price: 3500,
    image: "https://images.unsplash.com/photo-1636487658609-28282bb5a3a0?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "RGB Mousepad",
    price: 1000,
    image: "https://images.unsplash.com/photo-1629429407759-01cd3d7cfb38"
  }
];


export default function Dashboard() {

  const { fetchUser } = useContext(UserContext);
  const [loading, setLoading] = useState(null);

  const buy = async (price, name) => {
    try {
      setLoading(name);

      await api.post("/transactions", { amount: price });

      await fetchUser();

      alert("Purchase successful 🎉");

    } catch (err) {
      alert(err.response?.data?.message || "Purchase failed");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="page">
        <h2 style={{marginBottom:"25px"}}>🛍️ Shop Accessories</h2>

        <div className="grid">

          {products.map(p => (
            <div className="product-card" key={p.name}>

              <img src={p.image} alt={p.name} />

              <div className="product-info">
                <h3>{p.name}</h3>
                <p className="price">₹{p.price}</p>

                <button
                  className="buy-btn"
                  disabled={loading === p.name}
                  onClick={() => buy(p.price, p.name)}
                >
                  {loading === p.name ? "Processing..." : "Buy Now"}
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

