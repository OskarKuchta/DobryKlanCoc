import React, { useState } from "react";

const Stats: React.FC = () => {
  const [filterList, setFilterList] = useState<string>("TH");
  const [changeFilter, setChangeFilter] = useState<string>("TH");
  return (
    <div id="stats" className="stats">
      <div className="stats__top">
      <h2>Lista graczy względem: {filterList}</h2>
      <button>{changeFilter}</button>
      </div>
    </div>
  );
};

export default Stats;
