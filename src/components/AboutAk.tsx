import React, { useState } from "react";
import useFetch from "../Hooks/useFetch";

interface AboutAkProps {
  url: string;
  onClick: () => void;
}

const AboutAk: React.FC<AboutAkProps> = ({ url, onClick }) => {
  const { data } = useFetch(url);
  const [hide, setHide] = useState("hide");
  const [isBlocked, setIsBlocked] = useState<boolean>(false);
  const copyTag = () => {
    if (isBlocked) {
      return;
    }
    setHide("");
    setIsBlocked(true);
    navigator.clipboard.writeText(data.tag);
    setTimeout(() => {
      setHide("hide");
      setIsBlocked(false);
    }, 2000);
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
              #2QUPVLCGC
            </p>
            <p className={`about__right--clan-popup ${hide}`}>
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