import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admin/users", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw", // ✅ take full width of screen
        backgroundColor: "#000", // black background
        color: "#fff",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#00ff00",
          border: "2px solid #00ff00",
          padding: "12px",
          width: "100%", // ✅ heading full width
        }}
      >
        Admin Dashboard
      </h1>

      {/* ✅ Table takes full width */}
      <div style={{ width: "100%", overflowX: "auto" }}>
        <table
          style={{
            width: "100%", // ✅ full width table
            borderCollapse: "collapse",
            backgroundColor: "#111",
            border: "2px solid #00ff00",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#00ff00", color: "#000" }}>
              <th style={{ padding: "12px", border: "1px solid #00ff00" }}>ID</th>
              <th style={{ padding: "12px", border: "1px solid #00ff00" }}>Name</th>
              <th style={{ padding: "12px", border: "1px solid #00ff00" }}>Email</th>
              <th style={{ padding: "12px", border: "1px solid #00ff00" }}>GSTIN</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} style={{ borderBottom: "1px solid #00ff00" }}>
                <td style={{ padding: "12px", border: "1px solid #00ff00" }}>{u.id}</td>
                <td style={{ padding: "12px", border: "1px solid #00ff00" }}>{u.name}</td>
                <td style={{ padding: "12px", border: "1px solid #00ff00" }}>{u.email}</td>
                <td style={{ padding: "12px", border: "1px solid #00ff00" }}>{u.gstin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
