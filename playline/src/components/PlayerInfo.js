import React, { useState, useEffect } from "react";
import axios from "axios";

const PlayerInfo = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // used proxy to circumvent CORS error
      const response = await axios({
        url: "https://proxy.hackeryou.com",
        method: "GET",
        responseType: "JSON",
        params: {
          reqUrl:
            "https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json",
        },
      });
      const results = await response;
      setResults(results.data.players);
    };
    fetchData();
  }, []);

  let playerInfo = results.map((player) => {
    const { last_name, points } = player;

    return (
      <div key={last_name} className="playerInfo">
        <div className="playerInfo__container">
          <p className="playerInfo__name">{last_name}</p>
          <div className="playerInfo__pointsContainer">
            <div className="playerInfo__outerCircle">
              <div className="playerInfo__innerCircle">
                <p className="playerInfo__pointsData">{points}</p>
              </div>
            </div>
            <p className="playerInfo__pointsText">pts</p>
          </div>
        </div>
      </div>
    );
  });
  return playerInfo;
};

export default PlayerInfo;
