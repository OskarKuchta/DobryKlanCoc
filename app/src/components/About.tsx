import React from "react";
import useFetch from "../Hooks/useFetch";
const About: React.FC = () => {
  const { data, loading, error } = useFetch();
  if (loading) {
    <div>Loading...</div>;
  }
  if (error) {
    <div>Error</div>;
  }
  if (data) {
    const copyTag = () => {
      navigator.clipboard.writeText(data.tag);
    };
    console.log(data);
    return (
      <div id="home" className="about">
        <div className="about__left">
          <h1 className="about__left--header">
            Witamy na stronie klanu Dobry Klan. Jesteśmy zgraną ekipą, która gra
            ze sobą od lat w przyjaznej atmosferze. Jeżeli posiadasz th14+
            zapraszamy w nasze skromne progi. Aktualnie znajdujemy się w{" "}
            {data.warLeague.name} i posiadamy blians wojen {data.warWins} W /{" "}
            {data.warTies} T / {data.warLosses} L.
          </h1>
        </div>
        <div className="about__right">
          <img src={data.badgeUrls.medium} alt="logo Dobry Klan" />
          <h2 className="about__right--clanName">Dobry Klan</h2>
          <div className="about__right--clan">
            <h3 className="about__right--clan-tag" onClick={copyTag}>
              {data.tag}
            </h3>
            <p className="about__right--clan-popup">
              Text skopiowany do schowka.
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default About;
