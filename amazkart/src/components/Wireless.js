import React,{useState,useEffect} from "react";
import Items from "./Items";
import Axios from 'axios';
export default function Wireless() {
  const[wireless,setWireless] = useState([]);
  const get_wireless = () =>{
    Axios.get("http://localhost:3001/products/getwireless").then((response)=>{
      setWireless(response.data);
  });
  };
  useEffect(() => {
    get_wireless();
  }, [])
  if(wireless.length)
  {
    return (
      <div className="container">
        <h1 className="text-center">
          Best prices on all wireless devices.
        </h1>
        <div className="row">
          {wireless.map((element) => {
            return (
              <Items
                key={element.pid}
                pid={element.pid}
                price={element.price}
                img_url={element.img_url}
                name={element.pname}
                description={element.description}
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
          No wireless devices in the inventory :/
        </div>
    );

  }
}