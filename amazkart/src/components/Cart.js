import React, { useState,useEffect} from "react";
import Cartitem from "./Cartitem";
import { Link } from "react-router-dom";
import  Axios  from "axios";

export default function Cart(props) {
  const [cartItems,setCartItem] = useState([]);
  const get_cart_item = () =>{
    Axios.post("http://localhost:3001/cart/getcartitems",{email:props.email}).then((response)=>{
      setCartItem(response.data);
    });
  };
  useEffect(() => {
    get_cart_item();
    // eslint-disable-next-line
  }, [])
  const onRemove = (item) => {
    console.log("I am the remove of ", item);
    Axios.post("http://localhost:3001/cart/removefromcart",{id : item.cart_id}).then(()=>{
      console.log("Item deleted");
    });
    setCartItem(
      cartItems.filter((event) => {
        return event !== item;
      })
    );
  };

  return (
    <>
      <div className="container">
        <div
          className="container ml-0"
          style={{ width: "60%", margin: "0", padding: "0" }}
        >
          {cartItems.map((item) => {
            console.log(item);
            return <Cartitem item={item} key={item.pid} onRemove={onRemove} />;
          })}
          <Link
            to="/checkout"
            className="btn btn-primary text-center "
            style={{
              marginLeft: "640px",
              width: "175px",
              marginBottom: "10px",
            }}
          >
            Proceed to checkout
          </Link>
        </div>
      </div>
    </>
  );
}
