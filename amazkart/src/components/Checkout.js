import React,{useState,useEffect} from "react";
import Axios from "axios";
export default function Checkout() {
  const [items,setItems] = useState([]);
  const get_cart_item = () =>{
    Axios.get("http://localhost:3001/cart/getcartitems").then((response)=>{
      setItems(response.data);
    });
  };
  useEffect(() => {
    get_cart_item();
  }, []);
  const getTotal = () => {
    let Total = 0;
    for (let i = 0; i < items.length; i++) {
      Total += items[i].price * items[i].quantity;
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
                <tr key={element.pid}>
                  <td>{element.pname}</td>
                  <td>{element.quantity}</td>
                  <td><span>&#x20B9;</span>{element.price * element.quantity}</td>
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
        Total Cost= <span>&#x20B9;</span>{getTotal()} <br />
        Your order will be delivered in 4-5 days
        <button className="btn btn-primary mx-2">Place Order</button>
      </div>
    </div>
  );
}
