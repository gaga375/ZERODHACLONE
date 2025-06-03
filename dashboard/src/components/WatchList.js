import React, {useState ,useContext,useEffect} from "react";
import {Tooltip,Grow} from '@mui/material';
import { PaiChart } from "./PaiChart";
import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from '@mui/icons-material'
import GeneralContext from "./GeneralContext"
import axios from 'axios';
const WatchList = () => {
 useEffect(() => {
  axios.get('http://localhost:8080/orders')
    .then((res) => {
   
      setallorders(res.data); 
    })
    .catch((err) => {
      console.error("Axios Error:", err.message);
    });
}, []);
const [allorders,setallorders] = useState([]) 
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {allorders.length} / 50</span>
      </div>

      <ul className="list">
        {allorders.map((stock,index)=>{
          return(<>
<Watchlistitem stock={stock} index={index} />
</>
          )
        })}
      </ul>
    <PaiChart data={allorders}/>
    </div>
  );
};


export default WatchList;

const Watchlistitem = ({stock})=>{
  const [ShowWWatchListItemAction, setShowWWatchListItemAction] = useState(false)

  const HendleMouseEnte = (e)=>{
    setShowWWatchListItemAction(true);
  }

  const HendleMouseLeave = (e)=>{
    setShowWWatchListItemAction(false);
  }
  const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };}

  return(
    <li onMouseEnter={HendleMouseEnte} onMouseLeave={HendleMouseLeave}>
<div className="item">
  <p className={stock.isDown?"down" :"up"}>{stock.name}</p>
  <div className="itemInfo">
    <spam className="percent">{stock.percent}</spam>
    {
      stock.isDown?(
        <KeyboardArrowDown className="down"/>
      ):
      (<KeyboardArrowUp className="up"/>)
    }
     <spam className="price">{stock.price}</spam>
  </div>
</div>
 {ShowWWatchListItemAction && <WatchlistAction uid={stock.name}/>}
    </li>
  )
}



 const WatchlistAction = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy" onClick={handleBuyClick}>Buy</button> 
        </Tooltip>

        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell"onClick={handleBuyClick} >Sell</button>
        </Tooltip>

        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};

 