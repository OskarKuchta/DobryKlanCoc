import React from "react";
import Navbar from "./components/Navbar";
import { ErrorBoundary } from "./Hooks/useFetch";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import AboutMain from "./components/AboutMain";
import AboutAk from "./components/AboutAk";
import ToogleURL from "./context/ToogleURL";
const App: React.FC = () => {
  const { changeToMain, changeToAk, showContact, main, ak, urlMain, urlAk } =
    ToogleURL();
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
