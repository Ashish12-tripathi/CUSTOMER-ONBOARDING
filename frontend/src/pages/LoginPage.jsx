import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "4px solid green", // ✅ full-screen green boundary
        boxSizing: "border-box",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Login</h1>
        <LoginForm />

        {/* Navigation buttons */}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => navigate("/register")}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              backgroundColor: "#222",
              color: "white",
              border: "1px solid green",
              borderRadius: "5px",
            }}
          >
            Go to Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
