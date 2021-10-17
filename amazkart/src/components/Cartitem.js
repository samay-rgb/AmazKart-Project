import React, { useState } from "react";

export default function Cartitem({ item, onRemove }) {
  const [counter, setCount] = useState(item.qty);
  const handleDec = () => {
    if (counter) {
      setCount(counter - 1);
      item.qty = counter;
      console.log(item.qty);
    }
  };
  const handleInc = () => {
    if (counter < 5) {
      setCount(counter + 1);
      item.qty = counter;
      console.log(item.qty);
    }
  };

  return (
    <>
      {counter !== 0 && (
        <div className="card-item-container">
          <div className="pimg">
            <img src={item.imgSrc} className="cartimg" alt="product img" />
          </div>
          <div className="pdescription">
            <ul className="desc-list">
              <li>Product : {item.productName}</li>
              <li>
                <button className="btn btn-danger" onClick={handleDec}>
                  -
                </button>
              </li>
              <li>Qty : {counter}</li>
              <li>
                <button className="btn btn-success" onClick={handleInc}>
                  +
                </button>
              </li>
              <li>Price : {item.productPrice}</li>
              <li>Total : {item.productPrice * counter}</li>
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
