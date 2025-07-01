import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./PAGES/Auth/Login";
import Dashboard from "./PAGES/App/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
