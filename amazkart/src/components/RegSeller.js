import React from "react";
export default function RegSeller({ seller, onReject,onApprove }) {
  return (
    <div className="seller-card">
      <ul className="seller-details">
        <li>Name : {seller.name}</li>
        <li>Warehouse : {seller.w_address}</li>
        <li>Pincode : {seller.w_pincode}</li>
        <li>Address : {seller.w_address}</li>
        <li>e-Mail : {seller.email}</li>
      </ul>
      <button id="approve-seller" className="btn btn-small btn-primary" onClick={()=>{onApprove(seller);}}>
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
