import React, { useState } from "react";
import "../Signup.css";
import { useHistory } from "react-router-dom";
function SignUpIn() {
  const [isRight, setState] = useState(false);
  let history = useHistory();
  const [logincredentials, setLogincredentials] = useState({
    email: "",
    password: "",
  });
  const [signcreds, setSigncreds] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: signcreds.name,
        email: signcreds.email,
        password: signcreds.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/");
      window.location.reload();
    } else {
      alert("Invalid credentials");
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: logincredentials.email,
        password: logincredentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/");
      window.location.reload();
    } else {
      alert("Invalid credentials");
    }
  };
  const onChange = (e) => {
    setLogincredentials({
      ...logincredentials,
      [e.target.name]: e.target.value,
    });
  };
  const onChange2 = (e) => {
    setSigncreds({
      ...signcreds,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <h2 className="h2">Welcome To Amazkart</h2>
      <div
        className={isRight ? "containerl right-panel-active" : "containerl"}
        id="container "
      >
        <div className="form-container sign-up-container">
          <form className="login_form" action="#" onSubmit={handleSignUp}>
            <h1 className="h1">Create Account</h1>
            {/* <div className="social-container">
				<a className="login_a" href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a className="login_a" href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a className="login_a" href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div> */}
            <span className="span">or use your email for registration</span>
            <input
              className="login_input"
              type="text"
              placeholder="Name"
              value={signcreds.name}
              onChange={onChange2}
              name="name"
            />
            <input
              className="login_input"
              type="email"
              placeholder="Email"
              value={signcreds.email}
              onChange={onChange2}
              name="email"
            />
            <input
              className="login_input"
              type="password"
              placeholder="Password"
              value={signcreds.password}
              onChange={onChange2}
              name="password"
            />

            <button className="bn">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="login_form" action="#" onSubmit={handleLogin}>
            <h1 className="h1">Sign in</h1>
            {/* <div className="social-container">
				<a className="login_a" href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a className="login_a" href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a className="login_a" href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div> */}
            <span className="span">or use your account</span>
            <input
              className="login_input"
              type="email"
              placeholder="Email"
              value={logincredentials.email}
              onChange={onChange}
              name="email"
            />
            <input
              className="login_input"
              type="password"
              placeholder="Password"
              value={logincredentials.password}
              onChange={onChange}
              name="password"
            />
            <button className="bn">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="h1">Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost bn"
                id="signIn"
                onClick={() => setState(false)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="h1">Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost bn"
                id="signUp"
                onClick={() => setState(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUpIn;
