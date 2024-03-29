import React, { useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch("http://localhost:4000/api/createuser", {
    const response = await fetch(
      "https://cafe-des-juit.onrender.com/api/createuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.geolocation,
        }),
      }
    );

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    } else {
      alert("User registered");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="contain">
      <h1>Cafe des Juit</h1>
      <div className="register">
        <div className="left">
          <h2>Food and gossip.</h2>
          <h3>
            We welcome you to the cafe of JUIT. We help you to order food
            without standing in long queues and share gossips.
          </h3>
          <span>This project is developed by Animesh 201567</span>
        </div>

        <div className="right">
          <h3>Register</h3>

          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="name"
              placeholder="Name"
              value={credentials.name}
              onChange={onChange}
            />
            <input
              type="email"
              name="email"
              className="email"
              placeholder="email"
              value={credentials.email}
              onChange={onChange}
            />
            <input
              type="password"
              name="password"
              className="password"
              placeholder="Password"
              value={credentials.password}
              onChange={onChange}
            />
            <input
              type="text"
              name="geolocation"
              className="username"
              placeholder="Your Location"
              value={credentials.geolocation}
              onChange={onChange}
            />
            <Link to="/Login">
              <span>Already have an account?</span>
            </Link>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
