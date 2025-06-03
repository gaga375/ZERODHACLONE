import React, { useState } from "react";
import axios from "../axiosConfig";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const [FormLogInData, setFormLogInData] = useState({
    LogInEmail: "",
    LogInPassword: "",
  });

  const [FormSignUpData, setFormSignUpData] = useState({
    SignUpEmail: "",
    SignUpPassword: "",
    SignUpUserName: "",
  });

  const handleLogInChange = (e) => {
    setFormLogInData({
      ...FormLogInData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUpChange = (e) => {
    setFormSignUpData({
      ...FormSignUpData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/Signup", {
        username: FormSignUpData.SignUpUserName,
        email: FormSignUpData.SignUpEmail,
        password: FormSignUpData.SignUpPassword,
      });

      if (res.data.success) {
        alert("Signup successful!");
        navigate("/dashboard"); 
      } else {
        alert(res.data.message || "Signup failed");
      }
    } catch (e) {
      console.error(e);
      alert("Signup error! Try again.");
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://zerodhaclone-5boi.onrender.com/Login", {
        email: FormLogInData.LogInEmail,
        password: FormLogInData.LogInPassword,
      },{
       withCredentials:true
      });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token); 
      navigate("/dashboard");
        alert("Login successful!");
        navigate("/dashboard");
      } else {
        alert(res.data.message || "Login failed");
      }
    } catch (e) {
      console.error(e);
      alert("Login error! Try again.");
    }
  };

  return (
    <div className="row">
      <div className="col-3 pl-5" />
      <div className="col-4">
        <h2 className="text-center pb-3">SignUp</h2>

        <form
          onSubmit={handleSubmitSignup}
          className="needs-validation"
          noValidate
        >
          <div className="mb-3">
            <label htmlFor="SignUpEmail" className="form-label">
              Email address
            </label>

            <input
              type="email"
              id="SignUpEmail"
              name="SignUpEmail"
              placeholder="ex.. gt@.com"
              className="form-control"
              onChange={handleSignUpChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="SignUpUserName" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="SignUpUserName"
              className="form-control"
              name="SignUpUserName"
              onChange={handleSignUpChange}
              placeholder="gt730"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="SignUpPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="SignUpPassword"
              name="SignUpPassword"
              className="form-control"
              onChange={handleSignUpChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            SignUp
          </button>
        </form>
      </div>

      <div className="col-1 pl-5" />
      <div className="col-4 pl-5">
        <h2 className="text-center pb-3">Login</h2>

        <form onSubmit={handleSubmitLogin} className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="LogInEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="LogInEmail"
              className="form-control"
              placeholder="ex.. gt@.com"
              name="LogInEmail"
              onChange={handleLogInChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="LogInPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="LogInPassword"
              name="LogInPassword"
              className="form-control"
              onChange={handleLogInChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}