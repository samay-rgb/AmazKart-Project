import React,{useState,useEffect} from "react";
import Items from "./Items";
import Axios from 'axios';
export default function Itemholder() { 
  const [productList,setProductList] = useState([]);
  const get_prod = () =>{
    Axios.get("http://localhost:3001/products/getproducts").then((response)=>{
      setProductList(response.data);
  });
  };
  useEffect(() => {
    get_prod();
  }, [])
  if(productList.length)
  {
    return (
      <div className="container">
        <div className="row">
          {productList.map((element) => {
            return (
              <Items
                key={element.pid}
                pid={element.pid}
                price={element.price}
                img_url={element.img_url}
                name={element.pname}
                category={element.category}
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
          No Items in the inventory :/
        </div>
    );

  }
  
}
