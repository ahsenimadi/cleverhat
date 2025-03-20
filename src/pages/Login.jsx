import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Check if the email and password match
    if (email === "info@cleverhat.xyz" && password === "Admin@0147") {
      //   history.push("/admin"); // Redirect to admin page
    } else {
      alert("Invalid credentials"); // Alert for invalid login
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
      <div
        className="card bg-transparent border-light text-white text-center"
        style={{ width: "30rem" }}
      >
        <div className="card-body talk-form p-5">
          <h2 className="card-title mb-3">Login</h2>
          <input
            type="email"
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="btn-submit" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
