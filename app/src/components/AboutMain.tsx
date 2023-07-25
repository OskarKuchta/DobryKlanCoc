import React, { useState, useRef } from "react";
import useFetch from "../Hooks/useFetch";
interface AboutMain {
  url: string;
  onClick: () => void;
}

const AboutMain: React.FC<AboutMain> = ({ url, onClick }) => {
  const { data } = useFetch(url);
  const popupRef = useRef<HTMLParagraphElement>(null);
  const [popup, setPopup] = useState<boolean>(true);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);
  const Refpopup = popupRef.current;
  if (data) {
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
    return (
      <div id="home" className="about">
        <div className="about__left">
          <h1 className="about__left--header">
            Witamy na stronie klanu Dobry Klan. Jesteśmy zgraną ekipą, która gra
            ze sobą od lat w przyjaznej atmosferze i aktualnie jest nas{" "}
            {data.members} osób. Jeżeli posiadasz TH14+ zapraszamy w nasze
            skromne progi. Jeżeli zaś posiadasz niższe th zapraszamy do naszej
            akademii.
          </h1>
          <button onClick={onClick} className="about__left--button">
            Akademia
          </button>
        </div>
        <div className="about__right">
          <img src={data.badgeUrls.medium} alt="logo Dobry Klan" />
          <h2 className="about__right--clanName">Dobry Klan</h2>
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
  }
};
export default AboutMain;
