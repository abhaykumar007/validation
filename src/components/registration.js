import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFun } from "./Action";
import axios from "axios";
const Registration = () => {
  const [first_name, setFirst_name] = useState();
  const [last_name, setLast_name] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [flag, setFlag] = useState(true);
  const dispatch = useDispatch();

  // sending data to register
  function axiosRequest() {
    axios
      .post(`http://3.140.210.76:8000/api/user/`, {
        first_name,
        last_name,
        email,
        password,
      })
      .then((res) => {
        // console.log(res);
        if (res.statusText == "OK") {
          alert("user Login Successfully");
        } else {
          alert("Something Went wrong please try again");
        }
        // console.log(res.data);
      })
      .catch((error) => {
        console.log("error", error);
        alert("Something Went Wrong");
      });
  }

  // set data in REDUX
  function handelSubmit(e) {
    e.preventDefault();
    // console.log("data", first_name, last_name, email, password);
    let ref = { first_name, last_name, email, password };
    dispatch(addFun(ref));
    setFlag(false);
    axiosRequest();
  }
  return (
    <div>
      <h1>Registration Page</h1>
      <div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ padding: "3vh" }}>
            <label>
              First Name:
              <input
                type="text"
                firstname="first-name"
                onChange={(e) => setFirst_name(e.target.value)}
              />
            </label>
          </div>
          <div style={{ padding: "3vh" }}>
            <label>
              Last Name:
              <input
                type="text"
                lastname="last-name"
                onChange={(e) => setLast_name(e.target.value)}
              />
            </label>
          </div>
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
          <div
            style={{ width: "30vh", marginLeft: "auto", marginRight: "auto" }}
          >
            <input
              type="submit"
              value="Submit"
              onClick={(e) => handelSubmit(e)}
            />
          </div>
        </form>
        {flag ? (
          <div style={{ marginTop: "3vh" }}>
            <Link to="/login"> If you are already Login </Link>
          </div>
        ) : (
          <div style={{ marginTop: "3vh" }}>
            <Link to="/login"> Go to Login page </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Registration;
