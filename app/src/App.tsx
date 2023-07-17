import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { ErrorBoundary } from "./Hooks/useFetch";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
const App: React.FC = () => {
  return (
    <div className="bg-wrapper">
      <Navbar />
      <ErrorBoundary>
        <About />
      </ErrorBoundary>
      <Stats />
      <Contact />
    </div>
  );
};

export default App;
