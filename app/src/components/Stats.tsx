import React, { useRef, useState } from "react";
import useFetch from "../Hooks/useFetch";
const Stats: React.FC = () => {
  const filterOptions: string[] = ["NAZWA", "TH", "ROLA", "LEVEL"];
  const filterList = filterOptions;
  const [filterLoop, setfilterLoop] = useState<number>(0);
  const { data } = useFetch();
  const statsButton = useRef(null);
  const statsBtn = statsButton.current;
  const filterCurrent = () => {
    setfilterLoop((prev) => prev + 1);
    if (filterLoop === 2) {
      setfilterLoop(0);
    }
    statsBtn.blur();
  };
  if (data) {
    console.log(data.memberList[0].trophies);
    return (
      <div id="stats" className="stats">
        <div className="stats__top">
          <h2>Lista graczy względem: {filterList[filterLoop]}</h2>
          <button onClick={filterCurrent} ref={statsButton}>
            {filterList[filterLoop + 1 <= 2 ? filterLoop + 1 : 0]}
          </button>
        </div>
        <div className="stats__members">
          <table>
            <thead>
              <tr>
                <th>Lp.</th>
                <th>Nazwa</th>
                <th>TH</th>
                <th>Rola</th>
                <th>Level</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
};

export default Stats;
