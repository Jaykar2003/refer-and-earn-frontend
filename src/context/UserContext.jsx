import { createContext, useState, useEffect } from "react";
import api from "../api";

export const UserContext = createContext();

export default function UserProvider({ children }) {

  const [user, setUser] = useState(null);

  // THIS calls /me
  const fetchUser = async () => {
    try {
      const res = await api.get("/users/me");
      setUser(res.data);
    } catch {
      setUser(null);
    }
  };

  // auto fetch when app loads
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
}
