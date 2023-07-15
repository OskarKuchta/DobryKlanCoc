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
          <h1 className="about__left--header">Witamy na stronie klanu Dobry Klan</h1>
        </div>
        <div className="about__right">
          <img src={data.badgeUrls.medium} alt="logo Dobry Klan" />
          <h2>Dobry Klan</h2>
          <h2>{data.tag}</h2>
        </div>
      </div>
    );
  }
};

export default About;
