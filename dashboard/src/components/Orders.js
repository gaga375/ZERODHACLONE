import React from "react";
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Orders = () => {

   useEffect(() => {
  axios.get('https://zerodhaclone-5boi.onrender.com/newOrder')
    .then((res) => {
      setallorders(res.data); 
      console.log(res.data)
    })
    .catch((err) => {
      console.error("Axios Error:", err.message);
    });
}, []);

const [  allorders, setallorders] = useState([]) 

  return (
    <div className="orders">
        <div className="order-table">
        <table>
          <tr>
            <th>name</th>
           <th> mode</th>
            <th>Qty.</th>
           <th>price</th>
          </tr>
          { allorders.map((stock ,index)=>{
                  const name = stock.name
                 const qty = stock.qty;
                 return(
                    <tr key={index} className="">
                     <td>{name}</td>
                     <td className="profit" > {stock.mode}</td>
                     <td>{qty}</td>
                     <td  > {stock.price}</td>
                   </tr>
                 )
                   })}
        </table>
      </div>
    </div>
  );
};

export default Orders;
//  <div className="orders">
//       <div className="no-orders">
//         <p>You haven't placed any orders today</p>

//         <Link to={"/"} className="btn">
//           Get started
//         </Link>
//       </div>
//     </div>