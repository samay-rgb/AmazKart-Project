import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import userContext from "../context/user/userContext";

export default function Navbar(props) {
  let history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
    window.location.reload();
    props.showAlert("logged out", "danger");
  };
  const context = useContext(userContext);
  
  const { info, getUser } = context;
  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);
  
  return (
    <div className="navbar-container">
      {/* {setApproved(info.email)} */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/smartphone">
                  Smartphone
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/wireless">
                  Wireless devices
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/laptops">
                  Laptops
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cameras">
                  Cameras
                </Link>
              </li>
              
            </ul>
            <Link to="/cart" className="link-dark mx-3" style={ (!localStorage.getItem("token") || info.role!=="Buyer")? {display:"none"} : {} }>
              <img
                title="Go to Cart"
                src="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg"
                alt="..."
                style={{width:"40px"}}
              />
            </Link>
            {!localStorage.getItem("token") ? (
              <Link to="/login" className="btn btn-primary">
                Login / Sign up
              </Link>
            ) : (
              <button className="btn btn-primary" onClick={handleLogout}>
                Logout
              </button>
            )}
            {info.role === "Seller" &&(
              
                <button className="btn btn-primary mx-2" disabled={info.approved ? '':"disabled"}><Link to="/sell" style={{color:"white"}}>Seller</Link></button>
            )}
            {info.role === "Admin" && (
              <Link to="/admin" className="btn btn-primary mx-2">
                Admin
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};
Navbar.defaultProps = {
  title: "E-Mart",
  about: "About us",
};