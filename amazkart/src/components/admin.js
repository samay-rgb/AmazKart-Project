import React, { useState, useEffect } from "react";
import RegSeller from "./RegSeller";
import Axios from "axios";
export default function Admin() {
  const [sellers, setSellers] = useState([]);
  const get_sellers = () => {
    Axios.post("http://localhost:3001/user/getpendingseller").then(
      (response) => {
        console.log(response.data);
        setSellers(response.data);
      }
    );
  };
  useEffect(() => {
    get_sellers();
  }, []);
  const onApprove = (seller) => {
    Axios.post("http://localhost:3001/user/approveseller", {
      email: seller.email,
    }).then(() => {
      setSellers(
        sellers.filter((event) => {
          return event !== seller;
        })
      );
    });
  };
  const onReject = (seller) => {
    Axios.post("http://localhost:3001/user/rejectseller", {
      email: seller.email,
    }).then(() => {
      setSellers(
        sellers.filter((event) => {
          return event !== seller;
        })
      );
    });
  };
  return (
    <>
      <h1>Pending Requests: </h1>
      <div className="seller-cards-container">
        {sellers.map((seller) => {
          return (
            <RegSeller
              seller={seller}
              key={seller.email}
              onApprove={onApprove}
              onReject={onReject}
            />
          );
        })}
      </div>
    </>
  );
}
