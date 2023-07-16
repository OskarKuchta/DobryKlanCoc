import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { ErrorBoundary } from "./Hooks/useFetch";
import Stats from "./components/Stats";
const App: React.FC = () => {
  return (
      <div className="bg-wrapper">
        <Navbar />
        <ErrorBoundary>
          <About />
        </ErrorBoundary>
        <Stats />
      </div>
  );
};

export default App;
