import React, { useState } from "react";
import { useHistory } from "react-router-dom";
export default function Buyer() {
  let history = useHistory();
  const [buyercreds, setBuyercreds] = useState({
    address: "",
    pincode: "",
    phone: "",
  });
  const handleAddDetails = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/auth/buyerinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        pincode: buyercreds.pincode,
        address: buyercreds.address,
        contact: buyercreds.phone,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      history.push("/");
      // window.location.reload();
    } else {
      alert("danger");
    }
  };
  const onChange = (e) => {
    setBuyercreds({
      ...buyercreds,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container w-50">
      <h1 className="my-3 mx-3">Please complete your sign-up</h1>
      <form className="m-3" onSubmit={handleAddDetails}>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">
            Contact
          </label>
          <input
            type="number"
            className="form-control medium-field"
            id="contact"
            value={buyercreds.phone}
            onChange={onChange}
            name="phone"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Enter your contact number
          </div>
        </div>
        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              id="address"
              value={buyercreds.address}
              onChange={onChange}
              name="address"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="pincode" className="form-label">
              Area Pincode
            </label>
            <input
              type="number"
              className="form-control small-field"
              id="pincode"
              value={buyercreds.pincode}
              onChange={onChange}
              name="pincode"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Enter your area pincode.
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}