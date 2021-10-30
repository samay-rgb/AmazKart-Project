import React,{useState,useEffect,useContext} from 'react'
import userContext from "../context/user/userContext";
import Axios from "axios";
export default function Profile() 
{
    const get_buyer = (email) =>
    {
        Axios.post("http://localhost:3001/user/getbuyer",{email:email}).then((response)=>{
            setBuyer(response.data);
        })
    };
    const get_orders = (email) =>
    {
        Axios.post("http://localhost:3001/user/getorders",{email:email}).then((response)=>{
            setOrders(response.data)
        });
    };
    const [buyer,setBuyer] = useState([]);
    const [orders,setOrders] = useState([]);
    const context = useContext(userContext);
    // eslint-disable-next-line
    const { info, getUser } = context;
    useEffect(() => {
        getUser();
        // eslint-disable-next-line
      }, []);
    return (
        <div className="container my-3 mx-1">
            <h2>Welcome {info.name}</h2>
            <button className="btn btn-warning my-2" onClick={()=>{get_buyer(info.email)}}>View Details</button>
            {buyer.map((buyer)=>{
                    return(
                        <ul style={{listStyle:"none",fontSize:"18px"}}>
                    <li><b>Address</b> : {buyer.address}</li>
                    <li><b>Pincode</b> : {buyer.pincode}</li>
                    <li><b>email</b> : {info.email.slice(1,info.email.length-1)}</li>
                    <li><b>contact</b> : {buyer.contact}</li>
                </ul>
                    );
            })}
            <button className="btn btn-success my-2 mx-1" onClick={()=>{get_orders(info.email)}}>Your Orders</button>
            <ol className="list-group list-group-numbered">
            {orders.map((element) => {
              return (
                <li
                  key={element.oid}
                  className="list-group-item d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{element.pname}</div>
                    Total : <span>&#x20B9;</span>{element.total}
                    <p className="my-0">Date : {element.date.slice(0,10)}</p>
                  </div>
                  <span className="badge bg-primary rounded-pill">
                    Qty:{element.quantity}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
    )
}
