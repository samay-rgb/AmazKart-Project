import React, { useState } from "react";
import Axios from "axios";
export default function Seller() {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [pname, setPname] = useState("");
  const [seller, setSeller] = useState("");
  const products = [
    {
      id: "a",
      name: " Laptop",
      price: "150",
      quantiy: "5",
    },
    {
      id: "b",
      name: " Laptop",
      price: "1150",
      quantiy: "5",
    },
    {
      id: "c",
      name: " Laptop",
      price: "1520",
      quantiy: "5",
    },
    {
      id: "d",
      name: " Laptop",
      price: "150",
      quantiy: "50",
    },
  ];
  const addproduct = () => {
    console.log([pname, quantity, seller, price]);
    Axios.post("http://localhost:3001/addproducts", {
      pname: pname,
      quantity: quantity,
      price: price,
      seller: seller,
    }).then(() => {
      console.log("successfuly added the product");
    });
  };
  return (
    <div className="container my-3">
      <h1>Welcome SaiKumar Andure! </h1>
      <h4>Here you can easily manage your products</h4>
      <div className="container my-3">
        <div className="viewproducts">
          <ol className="list-group list-group-numbered">
            {products.map((element) => {
              return (
                <li
                  key={element.id}
                  className="list-group-item d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{element.name}</div>
                    Rate= ${element.price}
                  </div>
                  <span className="badge bg-primary rounded-pill">
                    {element.quantiy}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <hr />
      <div className="addproduct container my-3">
        <h2 className="text-center">
          Add new products or manage existing products
        </h2>
        <form action="" className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="emailHelp"
              onChange={(event) => {
                setSeller(event.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={(event) => {
                setPname(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              aria-describedby="emailHelp"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              name="quantity"
              aria-describedby="emailHelp"
              onChange={(event) => {
                setQuantity(event.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={addproduct}
          >
            Add to Catalogue
          </button>
          <button type="submit" className="btn btn-info mx-3">
            Update catalogue
          </button>
        </form>
      </div>
    </div>
  );
}
