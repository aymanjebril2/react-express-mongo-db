import React, { useState, useEffect } from "react";
import axios from "axios";

const GetUser = () => {
  const [user, setUser] = useState([]);

  const getAllUser = async () => {
    const response = await axios.get("http://localhost:5000/getname");
    setUser(response.data);
  };

  useEffect(() => {
    getAllUser();
  }, []);
  console.log(user);
  return (
    <div>
      <h3> get all user in my db </h3>
      <button> get all user </button>
    </div>
  );
};

export default GetUser;
