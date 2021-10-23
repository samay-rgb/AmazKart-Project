import React from "react";

export default function Buyer() {
  return (
    <div className="container w-50">
      <h1 className="my-3 mx-3">Please complete your sign-up</h1>
      <form className="m-3">
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">
            Contact
          </label>
          <input
            type="number"
            className="form-control medium-field"
            id="contact"
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
            <textarea className="form-control" id="address" rows="3"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="pincode" className="form-label">
              Area Pincode
            </label>
            <input
              type="number"
              className="form-control small-field"
              id="pincode"
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
