import React, { useState,useEffect,useContext} from "react";
import Cartitem from "./Cartitem";
import { Link } from "react-router-dom";
import  Axios  from "axios";
import userContext from "../context/user/userContext";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
export default function Cart(props) {
  const context = useContext(userContext);
  // eslint-disable-next-line
  const { info, getUser } = context;
  useEffect(() => {
    getUser();
    get_cart_item();
    // eslint-disable-next-line
  }, []);
  const [cartItems,setCartItem] = useState([]);
  const get_cart_item = () =>{
    Axios.post("http://localhost:3001/cart/getcartitems").then((response)=>{
      setCartItem(response.data);
    });
  };
  const onRemove = (item) => {
    console.log("I am the remove of ", item);
    Axios.post("http://localhost:3001/cart/removefromcart",{id : item.cart_id}).then(()=>{
      remove_from_toast();
    });
    setCartItem(
      cartItems.filter((event) => {
        return event !== item;
      })
    );
  };
  const remove_from_toast = () =>{
      toast.warning("Item removed from cart",{autoClose:2000});
  };
  let present = false;
  return (
      <div className="container cart">
        <div
          className="container ml-0"
          style={{ width: "60%", margin: "0", padding: "0" }}
        >
          {cartItems.filter(item => `"${item.email}"` === info.email).map(filter_item => {
            present = true;
            return(
              <Cartitem item={filter_item} key={filter_item.pid} onRemove={onRemove} />
            );
          })}
          <Link
            to="/checkout"
          >
            <button className="btn btn-primary text-center "
            style={{
              marginLeft: "640px",
              width: "175px",
              marginBottom: "10px",
              position:"absolute",
              top: "5em",
              right: "1em"
            }}
            disabled={ present ? '' : 'disabled' }>Proceed to checkout</button>

          </Link>
        </div>
      </div>
  );
}
