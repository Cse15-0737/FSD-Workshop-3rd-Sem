import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Enter your details to continue.");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setMessage("Please fill in both fields.");
      return;
    }

    setMessage(`Welcome, ${email}!`);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-side">
          <p className="login-badge">Secure Access</p>
          <h1>Welcome</h1>
          <p className="login-text">
            Sign in
          </p>
        </div>

        <form className="form-side" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter yourpassword"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">Log In</button>
          <p
            className={`status-message ${message.includes("Welcome") ? "success" : ""}`}
          >
            {message}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;