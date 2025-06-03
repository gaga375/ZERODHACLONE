
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoute from '../ProtectedRoute';
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import SignUp from "./Signup";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from './GeneralContext';

const Dashboard = () => {
  const location = useLocation();

  return (
    <div className="dashboard-container">
      {location.pathname !== "/SignUp" && (
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
      )}
      
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
        
          <Route path="/orders" element={<Orders />} />
       
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
       
          <Route path="/funds" element={<Funds />} />
       
          <Route path="/apps" element={<Apps />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
