import React, { useState, useEffect } from "react";
import axios from "axios";

const PlayerInfo = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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

  if (!results.data) {
    let playerInfo = results.map((player) => {
      const { last_name, points } = player;

      return (
        <div key={last_name}>
          <p>{last_name}</p>
          <div>
            <div>
              <div>
                <p>{points}</p>
              </div>
            </div>
            <p>pts</p>
          </div>
        </div>
      );
    });
    return playerInfo;
  }
};

export default PlayerInfo;
