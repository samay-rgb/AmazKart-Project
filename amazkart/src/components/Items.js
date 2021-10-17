import React from "react";
export default function Items(props) {
  /*const [counter, setCount] = useState(0);
  const handleDec = () => {
    if (counter) setCount(counter - 1);
  };
  const handleInc = () => {
    setCount(counter + 1);
  };
  const changeOne = () => {
    setCount(1);
  };*/
  return (
    <div className="col-md-3 my-3">
      <div className="card" style={{ maxWidth: "18rem" }}>
        <img
          src={props.image}
          className="card-img-top"
          alt="..."
          style={{ height: "15rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <h3 className="price">Price = ${props.price}</h3>
          {props.quantity !== 0 ? (
            <button href="/" className="btn btn-primary">
              Add to Cart
            </button>
          ) : (
            <h4 style={{ color: "red" }}>Out of stock</h4>
          )}
        </div>
      </div>
    </div>
  );
}
