import React, { useState } from "react";
import axios from "axios";
import "../styles/Update.css";
import { errorMessage, successMessage } from "../toast/toast.js";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const location = useLocation();
  let user = location.state.user;
  const [username, setUsername] = useState(user?.username);
  const [age, setAge] = useState(user?.age);
  const [email, setEmail] = useState(user?.email);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let userInfo = {
        id: user?._id,
        username: username,
        age: age,
        email: email,
      };
      const response = await axios.put("http://localhost:7000/update", userInfo);
      if (response.data.status === 0) {
        successMessage(response.data.response);
        navigate("/getAll");
      }
    } catch (error) {
      errorMessage(error.message);
    }
  };
  return (
    <section className="upFirst">
      <div className="upSub">
        <header className="upHead">UPDATE USER</header>
        <form className="upInputs">
          <input
            type="text"
            placeholder="USERNAME"
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="number"
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
          <div className="upSubmit">
            <button type="upButton" onClick={handleSubmit}>
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Update;
