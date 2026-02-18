import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Topbar from "./layout/Topbar";
import CoinDetail from "./pages/CoinDetail";

export default function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:symbol" element={<CoinDetail />} />
      </Routes>
    </>
  );
}
