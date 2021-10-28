//import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import "./App.css";
//import Titlebar from "./components/Titlebar";
import React,{useState} from "react";
import Carousel from "./components/Carousel";
//import Items from "./components/Items";
import Itemholder from "./components/Itemholder";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpIn from "./components/Signup";
import Cart from "./components/Cart";
import Seller from "./components/Seller";
import Smartphone from "./components/Smartphone";
import Checkout from "./components/Checkout";
import Admin from "./components/admin";
import Laptops from "./components/Laptops";
import Camera from "./components/Camera";
import Wireless from "./components/Wireless";
import BuyerForm from "./components/BuyerForm"
import SellerForm from "./components/SellerForm"
import UserState from "./context/user/userState";
import Profile from "./components/Profile";
import Alert from "./components/Alert";
function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
 
  return (
    <div>
      <UserState>
        <Router>
          <Alert alert={alert} />
          <Navbar title="AmazKart" />
          <Switch>
            <Route exact path="/">
              <Carousel />
              <Itemholder showAlert={showAlert} />
            </Route>
            <Route exact path="/login">
              <SignUpIn showAlert={showAlert} />
            </Route>
            <Route exact path="/buyerform">
              <BuyerForm />
            </Route>
            <Route exact path="/sellerform">
              <SellerForm />
            </Route>
            <Route exact path="/cart">
              <Cart showAlert={showAlert} />
            </Route>
            <Route exact path="/sell">
              <Seller showAlert={showAlert} />
            </Route>
            <Route exact path="/smartphone">
              <Smartphone />
            </Route>
            <Route exact path="/cameras">
              <Camera />
            </Route>
            <Route exact path="/wireless">
              <Wireless />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
            <Route exact path="/laptops">
              <Laptops />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Router>
      </UserState>
    </div>
  );
}

export default App;
