import React,{useContext,useEffect} from "react";
import userContext from "../context/user/userContext";
import Axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
export default function Items(props) {
  const context = useContext(userContext);
  // eslint-disable-next-line
  const { info, getUser } = context;
  const handleAddToCart = (email) =>{
        Axios.post("http://localhost:3001/cart/addtocart",{props:props,email:email}).then(()=>{
          added_to_cart_toast();
        });
  };
  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);
  const added_to_cart_toast = () =>{
      toast.success('Product added to cart',{autoClose:2000});
  };
  return (
    <div className="col-md-3 my-3">
      <div className="card" style={{ maxWidth: "18rem" ,height: "37rem",position:'relative'}}>
        <img
          src={props.img_url}
          className="card-img-top"
          alt="..."
          style={{ height: "15rem" }}
        />
        <div className="card-body">
          <h5 className="card-title my-2">{props.name}</h5>
          <h6>{props.category}</h6>
          <p className="card-text" style={{maxHeight: "5rem",overflowY:'scroll'}}>{props.description}</p>
          <div style={{position:"absolute",bottom:'1rem',left:'1rem'}}>
          <h3 className="price my-3"><span>&#x20B9;</span>{props.price}</h3>
          <p className="card-text my-0">{props.quantity} in stock.</p>
          {props.quantity !== 0 ? (
          <button href="/" className="btn btn-primary" onClick={()=>{handleAddToCart(info.email)}} disabled={ (localStorage.getItem("token") && info.role==="Buyer") ? '' : 'disabled' }>Add to Cart</button>
        ) : (
          <button className="btn btn-danger" disabled='disabled'>Out of stock</button>
        )}
          </div>
        </div>
      </div>
    </div>
  );
}

