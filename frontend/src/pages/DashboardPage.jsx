import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function DashboardPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data.slice(0, 10)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#000", // full black background
        color: "#fff",
        padding: "30px",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#00ff00",
          border: "2px solid #00ff00",
          padding: "10px",
        }}
      >
        Dashboard
      </h1>

      {/* ✅ Navbar full width */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
          borderBottom: "2px solid #00ff00",
          paddingBottom: "15px",
        }}
      >
        <Link to="/profile">
          <button
            style={{
              backgroundColor: "#00ff00",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Profile
          </button>
        </Link>

        <Link to="/admin">
          <button
            style={{
              backgroundColor: "#00ff00",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Admin Dashboard
          </button>
        </Link>
      </nav>

      {/* ✅ Posts take full screen width */}
      <div>
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #00ff00",
              margin: "15px 0",
              padding: "15px",
              borderRadius: "5px",
              backgroundColor: "#111",
            }}
          >
            <h3 style={{ color: "#00ff00" }}>{item.title}</h3>
            <p style={{ color: "#ddd" }}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
