import React,{useState,useEffect,useContext} from "react";
import Axios from "axios";
import userContext from "../context/user/userContext";
export default function Checkout() {
  const context = useContext(userContext);
  // eslint-disable-next-line
  const { info, getUser } = context;
  useEffect(() => {
    getUser();
    get_cart_item();
    get_buyer();
    // eslint-disable-next-line
  }, []);
  const [items,setItems] = useState([]);
  const [buyer,setBuyer] = useState([]);
  const get_cart_item = () =>{
    Axios.post("http://localhost:3001/cart/getcartitems").then((response)=>{
      setItems(response.data);
    });
  };
  const get_buyer = () =>{
    Axios.post("http://localhost:3001/user/getbuyer").then((response)=>{
      setBuyer(response.data);
    })
  };
  const order = (email) =>{
    Axios.post("http://localhost:3001/cart/order",{email:email}).then(()=>{
        Axios.post("http://localhost:3001/cart/updateinventory",{email:email}).then(()=>{
          Axios.post("http://localhost:3001/cart/clearcart",{email:email}).then(()=>{
            window.location.reload();
            present = false;
          });
        });  
    })
  };


  
  let total = 0;
  let present = false;
  return (
    <div>
      <div className="container my-4">
      {buyer.filter(buyer => buyer.email === info.email).map(user => {
        return(
          <div>
        <h1>Name: {info.name}</h1>
        <h3>Contact: {user.contact}</h3>
        <h3>Address: {user.address}</h3>
        <h3>Pincode: {user.pincode}</h3>
        </div>
        );
      })}
      </div>
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
            {items.filter(item => `"${item.email}"` === info.email).map(element => {
              total += element.total;
              present = true;
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
      <div className="container my-3">
        Total Cost= <span>&#x20B9;</span>{total} <br />
        Your order will be delivered in 4-5 days
        <button className="btn btn-primary mx-2" onClick={()=>{order(info.email)}} disabled={ present ? '' : 'disabled' }>Place Order</button>
      </div>
    </div>
  );
}
