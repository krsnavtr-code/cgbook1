import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      {/* Layout Route - Iske andar saare pages aayenge */}
      <Route path="/" element={<Layout />}>
        {/* Index Route (Default Home Page) */}
        <Route index element={<Home />} />

        {/* Future mein aur pages yahan add honge, jaise: */}
        {/* <Route path="videos" element={<Videos />} /> */}
        {/* <Route path="photos" element={<Photos />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
