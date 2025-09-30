import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
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
        <h1>Register</h1>
        <RegisterForm />

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
            onClick={() => navigate("/login")}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              backgroundColor: "#222",
              color: "white",
              border: "1px solid green",
              borderRadius: "5px",
            }}
          >
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
