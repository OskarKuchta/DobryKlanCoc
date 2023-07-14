import React, { useEffect, useState } from "react";

const About: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.clashofclans.com/v1/clans/%23Y09R909",
          {
            headers: {
              Accept: "application/json",
              Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImE3NjlkYTcxLTFhMWQtNDdmZC1iZTc4LTM1MTY5YmQ0NWYwNyIsImlhdCI6MTY4OTM2MjA0MSwic3ViIjoiZGV2ZWxvcGVyLzczZGY3Yjk0LThkNzktZWM0YS1iMjE0LWRlN2NiZmE2OTkxNiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE3OC4yMzUuMTg4LjI1NCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.X1urimcIB_d48VwnD9txf9BrQtNWDIFdE-WFrSyoNp2A7GuILB2T-pCfLPsaH1D0IIeEcs7YDCpkbT9TA2_mBg",
            },
          }
        );
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.log("An error occurred:", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <div id="home" className="about">
      <div className="about__left">
        <h1>Witamy na stronie klanu Dobry Klan</h1>
      </div>
      <div className="about__right">
        <img />
        <p></p>
      </div>
    </div>
  );
};

export default About;
