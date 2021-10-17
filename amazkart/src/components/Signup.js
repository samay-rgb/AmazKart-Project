import React, { useState } from "react";
import "../Signup.css";
function SignUpIn() {
  const [isRight, setState] = useState(false);

  return (
    <>
      <h2 className="h2">Welcome To Amazkart</h2>
      <div
        className={isRight ? "containerl right-panel-active" : "containerl"}
        id="container "
      >
        <div className="form-container sign-up-container">
          <form className="login_form" action="#">
            <h1 className="h1">Create Account</h1>
            {/* <div className="social-container">
				<a className="login_a" href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a className="login_a" href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a className="login_a" href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div> */}
            <span className="span">or use your email for registration</span>
            <input className="login_input" type="text" placeholder="Name" />
            <input className="login_input" type="email" placeholder="Email" />
            <input
              className="login_input"
              type="password"
              placeholder="Password"
            />

            <select
              id="type"
              className="form-select form-select-lg my-3 mb-3"
              aria-label=".form-select-lg example"
              style={{ width: "50%", fontSize: "0.85em" }}
            >
              <option defaultValue>Sign up as</option>
              <option value="1">Customer</option>
              <option value="2">Seller</option>
            </select>
            <button className="bn">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="login_form" action="#">
            <h1 className="h1">Sign in</h1>
            {/* <div className="social-container">
				<a className="login_a" href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a className="login_a" href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a className="login_a" href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div> */}
            <span className="span">or use your account</span>
            <input className="login_input" type="email" placeholder="Email" />
            <input
              className="login_input"
              type="password"
              placeholder="Password"
            />
            <button className="bn">Sign In</button>

            <select
              className="form-select form-select-lg my-3 mb-3"
              aria-label=".form-select-lg example"
              style={{ width: "50%", fontSize: "0.85em" }}
            >
              <option defaultValue>Login as</option>
              <option value="1">Customer</option>
              <option value="2">Seller</option>
              <option value="3">Admin</option>
            </select>
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
