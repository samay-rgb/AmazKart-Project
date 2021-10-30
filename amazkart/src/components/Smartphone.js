import React,{useState} from "react";
import Items from "./Items";
import Axios from 'axios';
export default function Smartphone() {
  const[smartphones,setSmartphones] = useState([]);
  const get_phone = () =>{
    Axios.get("http://localhost:3001/products/getphones").then((response)=>{
      setSmartphones(response.data);
  });
  };
  get_phone();
  if(smartphones.length)
  {
    return (
      <div className="container">
        <h1 className="text-center">
          Find best selling smartphones according to your budget. Get additional 10%
          off this festive season.
        </h1>
        <div className="row">
          {smartphones.map((element) => {
            return (
              <Items
                key={element.pid}
                pid={element.pid}
                price={element.price}
                img_url={element.img_url}
                name={element.pname}
                description={element.description}
                quantity={element.quantity}
              />
            );
          })}
        </div>
      </div>
    );
  }
  else 
  {
    return(
      <div className="container text-center my-3">
          No smartphones in the inventory :/
        </div>
    );

  }
}
