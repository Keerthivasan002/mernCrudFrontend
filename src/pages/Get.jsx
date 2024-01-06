import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Get.css";
import { errorMessage, successMessage } from "../toast/toast.js";
import { useNavigate } from "react-router-dom";

const Get = () => {
  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();
  const fetchAll = async () => {
    try {
      const response = await axios.get("http://localhost:7000/getAllUser");
      let data = response.data.response;
      console.log(data);
      setUserInfo(data);
    } catch (error) {
      errorMessage(error.message);
    }
  };

  const viewOne = async (userId) => {
    try {
      let data = { id: userId };
      const response = await axios.post("http://localhost:7000/getOne", data);
      let info = response.data.response;
      if (response.data.status === 0) {
        navigate("/getOneUser", { state: { userInfo: info } });
      }
      // let data = response.data.response;
      // console.log(data);
      // setUserInfo(data);
    } catch (error) {
      errorMessage(error.message);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    < >
      {userInfo == [] ? (
        <div>No post found</div>
      ) : (
        <div className="Getall">
          {
       userInfo.map((user) => (
          <>
 
            {" "}
            {/*fragement*/}
            <div className="Gethead">
            <h2>{user.username}</h2>
            <h6>{user.email}</h6>
            <h3>{user.age}</h3>
            <button className="GetBut" onClick={() => viewOne(user._id)}>View</button>
            </div>

          </>
          
        )) }           </div>
        
      )}
    </>
  );
};

export default Get;
