import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Stats from "./components/Stats";
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <About />
      <Stats />
    </>
  );
};

export default App;
