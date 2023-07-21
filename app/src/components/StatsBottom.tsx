import React from "react";
import useFetch from "../Hooks/useFetch";

const StatsBottom: React.FC = () => {
  const { data } = useFetch();
  if (data) {
    let mostDonate = data.memberList.map((item: any) => item.donations);
    mostDonate.sort((a: number, b: number) => b - a);
    const topDonator = mostDonate[0];
    let mostDonateName = data.memberList.find(
      (item: any) => item.donations === topDonator
    );
    return (
      <div className="stats__bottom">
        <h2>Kraj: Polska</h2>
        <h2>Level klanu: {data.clanLevel}</h2>
        <h2>Aktualna liga: {data.warLeague.name}</h2>
        <h2>Liga Capital: {data.capitalLeague.name}</h2>
        <h2>Wygrane wojny: {data.warWins}</h2>
        <h2>Zremisowane wojny: {data.warTies}</h2>
        <h2>Przegrane wojny: {data.warLosses}</h2>
        <h2>Aktualny win streak: {data.warWinStreak}</h2>
        <h2>
          Najwięcej rozdanych donatów w aktualnym sezonie: {mostDonateName.name}
          {" => "}
          {mostDonate[0]}
        </h2>
      </div>
    );
  }
};

export default StatsBottom;
