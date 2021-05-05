import React, { useState, useEffect } from "react";
import axios from "axios";

const AddUser = () => {
  const [fisrtName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleAddUser = async () => {
    await axios({
      method: "POST",
      data: {
        fisrtName,
        lastName,
      },
      withCredentials: true,
      url: "http://localhost:5000/addname",
    }).then((res) => console.log(res));
  };

  return (
    <div>
      <h3> add ur fist name :</h3>
      <input type="text" onChange={(e) => setFirstName(e.target.value)} />
      <h3> add ur last name :</h3>
      <input type="text" onChange={(e) => setLastName(e.target.value)} />
      <button onClick={handleAddUser}> add user</button>
    </div>
  );
};

export default AddUser;
