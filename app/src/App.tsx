import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { ErrorBoundary } from "./Hooks/useFetch";
import Stats from "./components/Stats";
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <ErrorBoundary>
        <About />
      </ErrorBoundary>
      <Stats />
    </>
  );
};

export default App;
