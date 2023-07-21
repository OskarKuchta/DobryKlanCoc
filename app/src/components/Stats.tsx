import React, { useRef, useState } from "react";
import useFetch from "../Hooks/useFetch";
import StatsBottom from "./StatsBottom";
const Stats: React.FC = () => {
  interface Member {
    name: string;
    role: string;
    expLevel: number;
    trophies: number;
  }
  const filterOptions: string[] = ["NAZWA", "ROLA", "LEVEL", "PUCHARY"];
  const filterList = filterOptions;
  const [filterLoop, setfilterLoop] = useState<number>(1);
  const { data } = useFetch();
  const statsButton = useRef<HTMLButtonElement>(null);
  const statsBtn = statsButton.current;
  const [arrow, setArrow] = useState<string>("up");
  const [isTableVisible, setIsTableVisible] = useState<boolean>(true);
  if (data) {
    const filterCurrent: () => void = () => {
      setfilterLoop((prev) => (prev + 1) % 4);
      if (filterLoop === 3) {
        setfilterLoop(0);
      }
      statsBtn.blur();
    };
    const hideTable: () => void = () => {
      setIsTableVisible((prev) => !prev);
      setArrow((prev) => (prev === "up" ? "down" : "up"));
    };
    const comparator = (a: Member, b: Member) => {
      if (filterLoop === 0) {
        return a.name.localeCompare(b.name);
      } else if (filterLoop === 1) {
        const roleOrder: { [key: string]: number } = {
          member: 3,
          admin: 2,
          coLeader: 1,
          leader: 0,
        };
        return roleOrder[a.role] - roleOrder[b.role];
      } else if (filterLoop === 2) {
        return b.expLevel - a.expLevel;
      } else if (filterLoop === 3) {
        return b.trophies - a.trophies;
      } else {
        return b.expLevel - a.expLevel;
      }
    };
    const sortedList: any[] = [...data.memberList].sort(comparator);
    return (
      <>
        <div id="stats" className="stats">
          <div className="stats__top">
            <div className="stats__top--left">
              <h2>Lista graczy względem: {filterList[filterLoop]}</h2>
              <button
                onClick={filterCurrent}
                ref={statsButton}
                className="stats__top--hover"
              >
                {filterList[filterLoop + 1 <= 3 ? filterLoop + 1 : 0]}
              </button>
            </div>
            <div className="stats__top--right">
              <i
                className={`fa-solid fa-angle-${arrow} stats__top--arrow`}
                onClick={hideTable}
              ></i>
            </div>
          </div>
          {isTableVisible && (
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
                  {sortedList.map((element: Member, index: number) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{element.name}</td>
                      <td>
                        {element.role === "admin"
                          ? "Elder"
                          : element.role === "coLeader"
                          ? "Co-leader"
                          : element.role[0].toUpperCase() +
                            element.role.slice(1)}
                      </td>
                      <td>{element.expLevel}</td>
                      <td>{element.trophies}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <StatsBottom />
      </>
    );
  }
};

export default Stats;
