// src/pages/Dashboard.jsx
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  const location = useLocation();
  const username = location.state?.username ;
  const message = location.state?.message ;

  return (
    <div>
      <Navbar />
      <h2>Dashboard</h2>
      <p>Hoş geldin, {username}!</p>
      <p>{message}</p>
    </div>
  );
}

export default Dashboard;
