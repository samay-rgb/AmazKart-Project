import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
export default function SellerForm() {
  let history = useHistory();
  const [sellercreds, setSellercreds] = useState({
    state: "",
    address: "",
    pincode: "",
    acno: "",
    ifsc: "",
    phone: "",
  });
  const handleAddDetails = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/auth/sellerinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        state: sellercreds.state,
        address: sellercreds.address,
        pincode: sellercreds.pincode,
        acno: sellercreds.acno,
        ifsc: sellercreds.ifsc,
        contact: sellercreds.phone,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      history.push("/");
      window.location.reload();
      toast.success("Signup Successful");
      toast.warning("Please wait for admin to approve you");
    } else {
      alert("danger");
    }
  };
  const onChange = (e) => {
    setSellercreds({
      ...sellercreds,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container w-50">
      <h1 className="my-3 mx-3">Please complete your sign-up</h1>
      <form className="m-3" onSubmit={handleAddDetails}>
        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="w-state" className="form-label">
              Warehouse State
            </label>
            <input
              type="text"
              className="form-control small-field"
              id="w-state"
              value={sellercreds.state}
              onChange={onChange}
              name="state"
              aria-describedby="username"
            />
            <div id="warehouse-state" className="form-text">
              Enter state where warehouse is present.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="w-address" className="form-label">
              Warehouse Address
            </label>
            <textarea
              className="form-control"
              id="w-address"
              rows="3"
              value={sellercreds.address}
              onChange={onChange}
              name="address"
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="w-pincode" className="form-label">
              Warehouse Pincode
            </label>
            <input
              type="number"
              className="form-control small-field"
              id="w-pincode"
              value={sellercreds.pincode}
              onChange={onChange}
              name="pincode"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Enter warehouse area pincode.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="w-pincode" className="form-label">
              Contact Number
            </label>
            <input
              type="number"
              className="form-control small-field"
              id="w-phone"
              value={sellercreds.phone}
              onChange={onChange}
              name="phone"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Enter your phone number.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="ifsc" className="form-label">
              IFSC Code
            </label>
            <input
              type="text"
              className="form-control small-field"
              id="ifsc"
              value={sellercreds.ifsc}
              onChange={onChange}
              name="ifsc"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Enter IFSC code.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="ac-no" className="form-label">
              AC Number
            </label>
            <input
              type="textr"
              className="form-control medium-field"
              id="ac-no"
              value={sellercreds.acno}
              onChange={onChange}
              name="acno"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Enter account number.
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