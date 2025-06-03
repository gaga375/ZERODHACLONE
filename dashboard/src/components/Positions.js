import React from "react";
 import {useState,useEffect} from "react";
import axios from 'axios';


const Positions = () => {
  useEffect(() => {
  axios.get('https://zerodhaclone-5boi.onrender.com/position')
    .then((res) => {
      setallPosition(res.data); 
    })
    .catch((err) => {
      console.error("Axios Error:", err.message);
    });
}, []);

const [allPosition,setallPosition] = useState([]) 
  return (
    <>
      <h3 className="title">Positions ({allPosition.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {allPosition.map((stock ,index)=>{
                 const curPrice = stock.qty * stock.price;
                 const product= stock.product;
const name = stock.name
                 const isProfit =   curPrice - stock.avg * stock.qty >= 0.0;
                 const ProfClass = isProfit? "profit":"loss";
                 const dayClass = stock.isLoss? 'loss':'profit';
                 const qty = stock.qty;
                 return(
                    <tr key={index} className="">
                        
                     <td>{product}</td>
                     <td>{name}</td>
                     <td>{qty}</td>
                     <td>{stock.avg.toFixed(2)}</td>
                     <td>{stock.price.toFixed(2)}</td>
                     <td className={ProfClass}>{(curPrice-stock.avg*stock.qty).toFixed(2)}</td>
                   
                     <td className={dayClass}>{stock.day}</td>
                   </tr>
                 )
                   })}
        </table>
      </div>
    </>
  );
};

export default Positions;
