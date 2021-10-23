import React from "react";

export default function Seller() {
  return (
    <div className="container w-50">
      <h1 className="my-3 mx-3">Please complete your sign-up</h1>
      <form className="m-3">
        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="w-state" className="form-label">
              Warehouse State
            </label>
            <input
              type="text"
              className="form-control small-field"
              id="w-state"
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
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Enter warehouse area pincode.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="ifsc" className="form-label">
              IFSC Code
            </label>
            <input
              type="number"
              className="form-control small-field"
              id="ifsc"
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
              type="number"
              className="form-control medium-field"
              id="ac-no"
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
