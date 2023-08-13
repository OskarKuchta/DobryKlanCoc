import React, { useState, useEffect } from "react";
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
  const [showContact, setShowContact] = useState<boolean>(false);
  useEffect(() => {
    const load: NodeJS.Timeout = setTimeout(() => {
      setShowContact(true);
    }, 1500);
    return () => {
      clearTimeout(load);
    };
  });
  const [main, setMain] = useState<boolean>(true);
  const [ak, setAk] = useState<boolean>(false);
  const urlMain: string =
    "https://dobry-klan.netlify.app/.netlify/functions/server/clan/main";
  const urlAk: string =
    "https://dobry-klan.netlify.app/.netlify/functions/server/clan/ak"; // linki do serwera

  // const urlMain: string = "api/v1/clans/%23Y09R909";
  // const urlAk: string = "api/v1/clans/%232qupvlcgc"; // linki proxy

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
          {showContact && <Contact />}
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
          {showContact && <Contact />}
        </>
      )}
    </div>
  );
};
export default App;
