import React, { useState } from "react";

const Stats: React.FC = () => {
  const filterOptions: string[] = ["NAZWA", "TH", "ROLA"];
  const filterList = filterOptions;
  const [filterLoop, setfilterLoop] = useState<number>(0);

  const filterCurrent = () => {
    setfilterLoop((prev) => prev + 1);
    if (filterLoop === 2) {
      setfilterLoop(0);
    }
  };
  
  return (
    <div id="stats" className="stats">
      <div className="stats__top">
        <h2>Lista graczy względem: {filterList[filterLoop]}</h2>
        <button onClick={filterCurrent}>{filterList[filterLoop + 1 <= 2 ? filterLoop + 1 : 0]}</button>
      </div>
    </div>
  );
};

export default Stats;
