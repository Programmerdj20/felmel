import { useState } from "react";

import "./index.css";
import BannerTop from "./components/BannerTop";
import NavBar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <div>
        <BannerTop />
        <NavBar />
        <Wrapper />
        <Cards />
      </div>
    </>
  );
}

export default App;
