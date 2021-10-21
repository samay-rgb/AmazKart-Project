import React, { useState,useEffect,useContext} from "react";
import userContext from "../context/user/userContext";
import Axios from "axios";

export default function Seller() {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [pname, setPname] = useState("");
  const [category, setCategory] = useState("Smartphone");
  const [img_url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [products,setProducts] = useState([]);
  const context = useContext(userContext);
  // eslint-disable-next-line
  const { info, getUser } = context;
  const get_seller_item = (email) =>{
    Axios.post("http://localhost:3001/products/getSellerItems",{seller_id:email}).then((response)=>{
      setProducts(response.data);
  });
  };
  useEffect(() => {
    getUser();
    console.log(info);
    // eslint-disable-next-line
  }, []);

  const addproduct = (email) => {
    console.log([pname,quantity,price,img_url,category,description]);
    Axios.post("http://localhost:3001/products/addproducts", {
      pname: pname,
      quantity: quantity,
      price: price,
      category: category,
      img_url: img_url,
      description:description,
      seller_id:email,
    }).then(() => {
      alert('Product added successfuly');
      console.log("successfuly added the product");
    });
  };
  return (

    <div className="container my-3">

      <h1>Welcome {info.name}! </h1>
      <h4>Here you can easily manage your products</h4>
      <button onClick={()=>{get_seller_item(info.email)}} className="btn btn-warning mx-3 my-2">Your Products</button>
      <div className="container my-3">
        <div className="viewproducts">
          <ol className="list-group list-group-numbered">
            {products.map((element) => {
              return (
                <li
                  key={element.pid}
                  className="list-group-item d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{element.pname}</div>
                    Rate=  <span>&#x20B9;</span>{element.price}
                  </div>
                  <span className="badge bg-primary rounded-pill">
                    {element.quantity}
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
              Product Description
            </label>
            <textarea className="form-control" id="description" rows="3" onChange={(event)=>{
                setDescription(event.target.value);
            }}></textarea>
          </div>
          <div className="mb-3">
      <label htmlFor="Select" className="form-label">Category</label>
      <select id="Select" className="form-select" onChange={(event)=>{setCategory(event.target.value);}}>
        <option>Smartphone</option>
        <option>Laptop</option>
        <option>Wireless</option>
        <option>Camera</option>
        <option>Other</option>
      </select>
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
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Image URL
            </label>
            <input
              type="text"
              className="form-control"
              id="img_url"
              name="img_url"
              aria-describedby="emailHelp"
              onChange={(event) => {
                setUrl(event.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={()=>{addproduct(info.email)}}
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