import React  from "react";
 import {useState,useEffect} from "react";
import axios from 'axios';
import { VerticalChart } from "./VerticalChart";


const Holdings = () => {
  useEffect(() => {
  axios.get('http://localhost:8080/holding')
    .then((res) => {
      setallHoldings(res.data); // 👈 ye line missing hai
    })
    .catch((err) => {
      console.error("Axios Error:", err.message);
    });
}, []);

 const [allHoldings,setallHoldings] = useState([]) 
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

           {allHoldings.map((stock ,index)=>{
            
        const curPrice = stock.qty * stock.price;
        const isProfit =   curPrice - stock.avg * stock.qty >= 0.0;
        const ProfClass = isProfit? "profit":"loss";
        const dayClass = stock.isLoss? 'loss':'profit'

        return(
           <tr key={index} className="">
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td>{curPrice.toFixed(2)}</td>
            <td className={ProfClass}>{(curPrice-stock.avg*stock.qty).toFixed(2)}</td>
            <td className={ProfClass}>{stock.net}</td>
            <td className={dayClass}>{stock.day}</td>
          </tr>) } 
        )
          }


        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            1,89,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            3,31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,41,553.40 (+83.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalChart backenddata={allHoldings}/>
    </>
  );
};

export default Holdings;
