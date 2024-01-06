import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Getone.css";
import { errorMessage, successMessage } from "../toast/toast.js";

const GetOne = () => {
  const [userInfo, setUserInfo] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  let data = location.state.userInfo;

  const deleteOne = async () => {
    try {
      let userId = { id: data._id };
      const response = await axios.delete("http://localhost:7000/delete", {
        data: userId,
      });
      if (response.data.status === 0) {
        successMessage(response.data.response);
        setUserInfo("");
        navigate("/getAll");
      }
    } catch (error) {
      errorMessage(error.message);
    }
  };

  const updateOne = async () => {
    navigate("/updateOne", { state: { user: data } });
  };

  useEffect(() => {
    setUserInfo(data);
  }, []);

  return (
    <section className="getone">
    <div className="head">
    <div className="body">
      <h1>{userInfo?.username}</h1>
      <h3>{userInfo?.email}</h3>
      <div className="button">
        <button className="up" onClick={updateOne}>update</button>
        <button className="del" onClick={deleteOne}>delete</button>
      </div>
    </div>
    </div>
    </section>
  );
};

export default GetOne;
