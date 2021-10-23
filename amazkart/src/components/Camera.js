import React,{useState,useEffect} from "react";
import Items from "./Items";
import Axios from 'axios';
export default function Camera() {
  const[cameras,setCameras] = useState([]);
  const get_camera = () =>{
    Axios.get("http://localhost:3001/products/getcamera").then((response)=>{
      setCameras(response.data);
  });
  };
  useEffect(() => {
    get_camera();
  }, [])
  if(cameras.length)
  {
    return (
      <div className="container">
        <h1 className="text-center">
          Find best selling smartphones according to your budget. Get additional 10%
          off this festive season.
        </h1>
        <div className="row">
          {cameras.map((element) => {
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
          No cameras in the inventory :/
        </div>
    );

  }
}