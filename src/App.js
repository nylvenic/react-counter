import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [mode, setMode] = useState('increment');
  return (
    <BrowserRouter>
      <Layout mode={mode} setMode={setMode}>
        <Routes>
          <Route path="/" element={<Home mode={mode}></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
