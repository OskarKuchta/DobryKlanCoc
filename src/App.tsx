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
  const urlMain: string = "https://dobry-klan.netlify.app/.netlify/functions/server/clans/main";
  const urlAk: string = "https://dobry-klan.netlify.app/.netlify/functions/server/clans/ak";

  // https://dobry-klan.netlify.app/.netlify/functions/server/clans/main
  // https://dobry-klan.netlify.app/.netlify/functions/server/clans/ak linki do serwera
  return (
    <div className="bg-wrapper">
      {main && (
        <>
          <Navbar />
          <main>
            <ErrorBoundary>
              <AboutMain url={urlMain} onClick={changeToAk} />
              <Stats url={urlMain} />
            </ErrorBoundary>
          </main>
            <Contact />
        </>
      )}
      {ak && (
        <>
          <Navbar />
          <main>
            <ErrorBoundary>
              <AboutAk url={urlAk} onClick={changeToMain} />
              <Stats url={urlAk} />
            </ErrorBoundary>
          </main>
            <Contact />
        </>
      )}
    </div>
  );
};

export default App;
