import React, { useState } from "react";
import Axios from "axios";
export default function Cartitem({ item, onRemove }) {
  const [counter, setCount] = useState(item.quantity);
  const handleDec = (item) => {
    if (counter>1) {
      setCount(counter-1);
      Axios.post("http://localhost:3001/cart/increaseQty",{id:item.cart_id,quantity:counter-1}).then(()=>{ 
        console.log("Quantity increased");
      });
    }
    else
    {
      onRemove(item);
    }
  };
  const handleInc = (item) => {
    if (counter < 5) {
      setCount(counter+1);
      Axios.post("http://localhost:3001/cart/increaseQty",{id:item.cart_id,quantity:counter+1}).then(()=>{ 
        console.log("Quantity increased");
      });
    }
  };

  return (
    <>
      {counter !== 0 && (
        <div className="card-item-container">
          <div className="pimg">
            <img src={item.img_url} className="cartimg" alt="product img" />
          </div>
          <div className="pdescription">
            <ul className="desc-list">
              <li>Product : {item.pname}</li>
              <li>
                <button className="btn btn-danger" onClick={handleDec}>
                  -
                </button>
              </li>
              <li>Qty : {counter}</li>
              <li>
                <button className="btn btn-success" onClick={()=>{handleInc(item)}}>
                  +
                </button>
              </li>
              <li>Price : {item.price}</li>
              <li>Total : {item.price * counter}</li>
              <li>
                {" "}
                <button
                  className="btn btn-large btn-danger remove-button"
                  onClick={() => {
                    onRemove(item);
                  }}
                >
                  Remove
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
