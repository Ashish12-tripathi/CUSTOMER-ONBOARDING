import { useEffect, useState } from "react";
import axios from "axios";

export default function ProfilePage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/me", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "black",
        color: "white",
        padding: "30px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          border: "3px solid green",
          borderRadius: "10px",
          padding: "20px",
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Profile</h1>
        <p>
          <b>Name:</b> {user.name}
        </p>
        <p>
          <b>Email:</b> {user.email}
        </p>
        <p>
          <b>GSTIN:</b> {user.gstin}
        </p>
      </div>
    </div>
  );
}
