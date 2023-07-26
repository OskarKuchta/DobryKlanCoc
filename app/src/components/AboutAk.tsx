import React, { useState, useRef } from "react";
import useFetch from "../Hooks/useFetch";

interface AboutAkProps {
  url: string;
  onClick: () => void;
}

const AboutAk: React.FC<AboutAkProps> = ({ url, onClick }) => {
  const { data } = useFetch(url);
  const popupRef = useRef<HTMLParagraphElement>(null);
  const [popup, setPopup] = useState<boolean>(true);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);
  const Refpopup = popupRef.current;
  const copyTag = () => {
    if (isBlocked) {
      return;
    }
    setIsBlocked(true);
    navigator.clipboard.writeText(data.tag);
    setPopup(true);
    if (popup && Refpopup) {
      Refpopup.style.display = "block";
      let i = 9;
      const fadeOut = () => {
        if (i >= 0) {
          Refpopup.style.opacity = `0.${i}`;
          i--;
          setTimeout(fadeOut, 200);
        }
      };
      fadeOut();
      const hide = setTimeout(() => {
        Refpopup.style.display = "none";
        setIsBlocked(false);
      }, 2000);
      if (Refpopup.style.display === "none") {
        clearTimeout(hide);
      }
    }
  };

  if (data) {
    return (
      <div id="home" className="about">
        <div className="about__left">
          <h1 className="about__left--header">
            Witamy na stronie klanu #DK_AK#. Jesteśmy zgraną ekipą, która gra ze
            sobą od lat w przyjaznej atmosferze i aktualnie jest nas{" "}
            {data.members} osób. Akademia klanu Dobry Klan. Zapraszamy chętnych
            od TH 10 do wspólnej gry. Jeżeli masz TH 14+ zapraszamy do głównego
            klanu.
          </h1>
          <button onClick={onClick} className="about__left--button">
            Główny
          </button>
        </div>
        <div className="about__right">
          <img src={data.badgeUrls.medium} alt="logo Dobry Klan" />
          <h2 className="about__right--clanName">#DK_AK#</h2>
          <div className="about__right--clan">
            <p className="about__right--clan-tag" onClick={copyTag}>
              {data.tag}
            </p>
            <p className="about__right--clan-popup" ref={popupRef}>
              Tekst skopiowany do schowka.
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default AboutAk;
