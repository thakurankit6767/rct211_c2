import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { login } from "../Redux/AuthReducer/action";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("eve.holt@reqres.in");
  const [password, setpassword] = useState("cityslicka");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const navigateTo = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password })).then((result) => {
        if (result.type === "LOGIN_SUCCESS") {
          navigate(navigateTo);
        }
      });
    }
  };
  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input
            data-cy="login-email"
            onChange={(e) => setemail(e.target.value)}
            defaultValue={"eve.holt@reqres.in"}
          />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input
            data-cy="login-password"
            onChange={(e) => setpassword(e.target.value)}
            defaultValue={"cityslicka"}
          />
        </div>
        <button type="submit" data-cy="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
