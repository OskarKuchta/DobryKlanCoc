import React, { useRef, useState } from "react";
import useFetch from "../Hooks/useFetch";
const Stats: React.FC = () => {
  interface Member {
    name: string;
    role: string;
    expLevel: number;
    trophies: number;
  }
  const filterOptions: string[] = ["NAZWA", "ROLA", "LEVEL", "PUCHARY"];
  const filterList = filterOptions;
  const [filterLoop, setfilterLoop] = useState<number>(0);
  const { data } = useFetch();
  const statsButton = useRef(null);
  const statsBtn = statsButton.current;
  if (data) {
    const filterCurrent: () => void = () => {
      setfilterLoop((prev) => prev + 1);
      if (filterLoop === 2) {
        setfilterLoop(0);
      }
      statsBtn.blur();
    };
    const sortedAlphabetically = [...data.memberList].sort(
      (a: Member, b: Member) => a.name.localeCompare(b.name)
    );

    const sortedByExp = [...data.memberList].sort(
      (a: Member, b: Member) => b.expLevel - a.expLevel
    );

    const sortedByTrophy = [...data.memberList].sort(
      (a: Member, b: Member) => b.trophies - a.trophies
    );
    const sortedByRole = (a: Member, b: Member) => {
      const roleOrder: { [key: string]: number } = {
        Leader: 3,
        "Co-leader": 2,
        Elder: 1,
        Member: 0,
      };

      return roleOrder[b.role] - roleOrder[a.role];
    };
    console.log(data.memberList[0]);
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
                <th>Rola</th>
                <th>Level</th>
                <th>Puchary</th>
              </tr>
            </thead>
            <tbody>
              {sortedAlphabetically.map((element: Member, index: number) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{element.name}</td>
                  <td>
                    {element.role === "admin"
                      ? "Elder"
                      : element.role === "coLeader"
                      ? "Co-leader"
                      : element.role[0].toUpperCase() + element.role.slice(1)}
                  </td>
                  <td>{element.expLevel}</td>
                  <td>{element.trophies}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default Stats;
