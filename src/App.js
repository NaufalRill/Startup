import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing"
import Home from "./Pages/Home"

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Landing/>} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/dashboard" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

