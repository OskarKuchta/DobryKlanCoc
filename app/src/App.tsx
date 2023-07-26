import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { ErrorBoundary } from "./Hooks/useFetch";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import AboutMain from "./components/AboutMain";
import AboutAk from "./components/AboutAk";
const App: React.FC = () => {
  const changeToMain = () => {
    setAk(false);
    setMain(true);
  };
  const changeToAk = () => {
    setMain(false);
    setAk(true);
  };
  const [main, setMain] = useState<boolean>(true);
  const [ak, setAk] = useState<boolean>(false);
  const urlMain: string = "https://api.clashofclans.com/v1/clans/%23Y09R909";
  const urlAk: string = "https://api.clashofclans.com/v1/clans/%232qupvlcgc";

  // const url: string = "api/v1/clans/%23Y09R909";
  return (
    <div className="bg-wrapper">
      {main && (
        <>
          <Navbar />
          <ErrorBoundary>
            <AboutMain url={urlMain} onClick={changeToAk} />
            <Stats url={urlMain} />
          </ErrorBoundary>
          <Contact />
        </>
      )}
      {ak && (
        <>
          <Navbar />
          <ErrorBoundary>
            <AboutAk url={urlAk} onClick={changeToMain} />
            <Stats url={urlAk} />
          </ErrorBoundary>
          <Contact />
        </>
      )}
    </div>
  );
};

export default App;
