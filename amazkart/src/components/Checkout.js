import React from "react";
//import img1 from "./img1.jpg";
export default function Checkout() {
  const items = [
    { productName: "Laptop1", qty: 5, productPrice: 1200, id: 1 },
    { productName: "Laptop2", qty: 1, productPrice: 1550, id: 2 },
    { productName: "Laptop3", qty: 2, productPrice: 2500, id: 3 },
    { productName: "Laptop4", qty: 5, productPrice: 500, id: 4 },
    { productName: "Laptop5", qty: 4, productPrice: 150, id: 5 },
    { productName: "Laptop6", qty: 2, productPrice: 1599, id: 6 },
  ];
  const getTotal = () => {
    let Total = 0;
    for (let i = 0; i < items.length; i++) {
      Total += items[i].productPrice * items[i].qty;
    }
    return Total;
  };
  return (
    <div>
      <h1 className="text-center">Order Summary</h1>\
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((element) => {
              return (
                <tr key={element.id}>
                  <td>{element.productName}</td>
                  <td>{element.qty}</td>
                  <td>${element.productPrice * element.qty}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="container">
        <h1>Name: Saksham Yadav</h1>
        <h3>
          Address: Nowhere Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eum, cum.
        </h3>
        Total Cost= ${getTotal()} <br />
        Your order will be delivered in 4-5 days
        <button className="btn btn-primary mx-2">Place Order</button>
      </div>
    </div>
  );
}
