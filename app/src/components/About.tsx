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
    console.log(data);
    return (
      <div id="home" className="about">
        <div className="about__left">
          <h1 className="about__left--header">
            Witamy na stronie klanu Dobry Klan. Jesteśmy zgraną ekipą, która
            gra ze sobą od lat w przyjaznej atmosferze. Jeżeli posiadasz th14+
            zapraszamy w nasze skromne progi. Aktualnie znajdujemy się w{" "}
            {data.warLeague.name} i posiadamy blians wojen {data.warWins}{" "}
            wygranych, {data.warTies} remisów oraz {data.warLosses} przegranych.
          </h1>
        </div>
        <div className="about__right">
          <img src={data.badgeUrls.medium} alt="logo Dobry Klan" />
          <h2 className="about__right--clanName">Dobry Klan</h2>
          <h3 className="about__right--clanTag">{data.tag}</h3>
    
        </div>
      </div>
    );
  }
};

export default About;
