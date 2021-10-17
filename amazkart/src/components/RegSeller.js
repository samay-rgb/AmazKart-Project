import React from "react";
export default function RegSeller({ seller, onReject }) {
  return (
    <div className="seller-card">
      <ul className="seller-details">
        <li>Name : {seller.name}</li>
        <li>Warehouse : {seller.warehouse}</li>
        <li>Contact : {seller.contact}</li>
        <li>Aadhar : {seller.aadhar}</li>
        <li>Id : {seller.id}</li>
      </ul>
      <button id="approve-seller" className="btn btn-small btn-primary">
        Approve
      </button>
      <button
        id="reject-seller"
        className=" btn btn-small btn-danger"
        onClick={() => {
          onReject(seller);
        }}
      >
        Reject
      </button>
    </div>
  );
}
