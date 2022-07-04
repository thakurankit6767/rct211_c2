import React from "react";
import { getLoginAPI } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { state } = useLocation();


  const email = "eve.holt@reqres.in";
  const password = "cityslicka";


  const handleSubmit = (e) => {
    e.preventDefault();
    // const email = e.target[0].value;
    // const password = e.target[1].value;

    const comingFrom = state?.from?.pathname || "/";

    dispatch(getLoginAPI({ email: email, password: password })).then((r) => {
      if (r.type === "get/login/success") {
        navigate(comingFrom, { replace: true });
      }
    });
  };

  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input data-cy="login-email" type="email" defaultValue={email} />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-cy="login-password" type="text" defaultValue={password}  />
        </div>
        <button type="submit" data-cy="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
