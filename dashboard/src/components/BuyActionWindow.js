import React, { useContext, useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import GeneralContext from './GeneralContext';
import "./BuyActionWindow.css";
import axios from 'axios';

const BuyActionWindow = ({ uid }) => {
  const context = useContext(GeneralContext); 
  const handleCancelClick = () => {
    context.closeBuyWindow(); 
  };
   const [stockQuantity,setstockQuantity] = useState(0)
   const [stockPrice,setstockPrice] = useState(0.0)

const BuyClickAction = () => {
  if( stockPrice &&  stockQuantity ){
     axios.post('https://zerodhaclone-5boi.onrender.com/newOrder', {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY"
    })
    .then(response => {
      console.log("Order successful:", response.data);
      context.closeBuyWindow(); 
    })
    .catch(error => {
      console.error("Error placing order:", error);
    });
  }
  else{
    alert("pleese enter valid price and quantity")
  }
   
  };
  
  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input type="number" 
            onChange={(e)=>{setstockQuantity(e.target.value)}}
             name="qty"
              id="qty" 
              required
              value={stockQuantity}/>
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input type="number"
             name="price" 
             id="price"
             required
              step="0.05"
              onChange={(e)=>{setstockPrice(e.target.value)}}
              value={stockPrice}
               />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span> fund required {stockPrice * stockQuantity}</span>
        <div>
          <Link onClick={BuyClickAction} className="btn btn-blue">Buy</Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
