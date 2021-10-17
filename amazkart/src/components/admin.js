import React, { useState } from "react";
import RegSeller from "./RegSeller";
export default function Admin() {
  const [sellers, setSellers] = useState([
    {
      name: "ABC XYZ",
      warehouse: "Laptop1",
      contact: 902351935,
      aadhar: "1500vsga34",
      id: 1,
    },
    {
      name: "ABC XYZ",
      warehouse: "Laptop2",
      contact: 902351935,
      aadhar: "1500axcb34",
      id: 2,
    },
    {
      name: "ABC XYZ",
      warehouse: "Laptop3",
      contact: 902351935,
      aadhar: "1500cdfgh76",
      id: 3,
    },
    {
      name: "ABC XYZ",
      warehouse: "Laptop4",
      contact: 902351935,
      aadhar: "1500cdfgh76",
      id: 4,
    },
    {
      name: "ABC XYZ",
      warehouse: "Laptop5",
      contact: 902351935,
      aadhar: "1500cdfgh76",
      id: 5,
    },
    {
      name: "ABC XYZ",
      warehouse: "Laptop6",
      contact: 902351935,
      aadhar: "1500cdfgh76",
      id: 6,
    },
  ]);
  const onReject = (seller) => {
    console.log("I am the reject of ", seller);
    setSellers(
      sellers.filter((event) => {
        return event !== seller;
      })
    );
  };
  return (
    <>
      <h1>Pending Requests: </h1>
      <div className="seller-cards-container">
        {sellers.map((seller) => {
          return (
            <RegSeller seller={seller} key={seller.id} onReject={onReject} />
          );
        })}
      </div>
    </>
  );
}
