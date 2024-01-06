import React, { useState } from "react";
import axios from "axios";
import "../styles/Create.css";
import { errorMessage, successMessage } from "../toast/toast.js";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const userInfo = { username, age, email };
      const response = await axios.post(
        "http://localhost:7000/create",
        userInfo
      );

      if (response.data.status === 1) {
        successMessage(response.data.response);
        setUsername("");
        setEmail("");
        setAge("");
        navigate("/getAll")
      } else {
        errorMessage(response.data.response);
      }
    } catch (error) {
      errorMessage(error.message);
    }
  };
  const handleRedirect = async () => {
    navigate("/getAll");
  };

  return (
    <section className="createFirst">
      <div className="cSub">
        <header className="cHead">USER INFORMATION</header>
        <form className="cInputs">
          <input
            type="text"
            placeholder="USERNAME"
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="Number"
            placeholder="Age"
            value={age}
            name="age"
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            name="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="cSubmit">
            <button className="createBut" type="button" onClick={handleSubmit}>
              CREATE
            </button>
          </div>
          <div className="REsubmit">
            <button type="button" onClick={handleRedirect}>
              REDIRECT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Create;
