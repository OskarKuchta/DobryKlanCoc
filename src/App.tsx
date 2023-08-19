import React, { lazy, Suspense } from "react";
import { ErrorBoundary } from "./Hooks/useFetch";
import ToogleURL from "./context/ToogleURL";

const AboutMain = lazy(() => import("./components/AboutMain"));
const AboutAk = lazy(() => import("./components/AboutAk"));
const Navbar = lazy(() => import("./components/Navbar"));
const Stats = lazy(() => import("./components/Stats"));
const Contact = lazy(() => import("./components/Contact"));

const App: React.FC = () => {
  const { changeToMain, changeToAk, showContact, main, ak, urlMain, urlAk } =
    ToogleURL();
  return (
    <div className="bg-wrapper">
      <Suspense
        fallback={
          <div className="loading">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            Loading...
          </div>
        }
      >
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
      </Suspense>
    </div>
  );
};
export default App;
