import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const Login = () => {
  const information = useSelector((state) => state.reducerFun.information);
  //   console.log("infomation", information);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //   validate the data by sending POST request
  function axiosRequest() {
    axios
      .post(` http://3.140.210.76:8000/api/token/`, {
        email,
        password,
      })
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        if (res.statusText == "OK") {
          alert("user Login Successfully");
        } else {
          alert("Something Went wrong please try again");
        }
      })
      .catch((error) => console.log("error", error));
  }
  function handelSubmit(e) {
    e.preventDefault();
    axiosRequest();
  }
  return (
    <div>
      <h1>LOGIN Page</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ padding: "3vh" }}>
          <label>
            Email:
            <input
              type="text"
              email="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div style={{ padding: "3vh" }}>
          <label>
            Password:
            <input
              type="password"
              password="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div style={{ width: "30vh", marginLeft: "auto", marginRight: "auto" }}>
          <input
            type="submit"
            value="Submit"
            onClick={(e) => handelSubmit(e)}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
