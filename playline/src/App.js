import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import Contest from "./components/Contest";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        method: "GET",
        url: "http://proxy.hackeryou.com",
        responseType: "JSON",
        data: {
          reqUrl:
            "https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json",
        },
      });
      const data = await response;
      console.log(data);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios({
  //       url:
  //         "https://rickandmortyapi.com/api/character/[1,2,3,4,5,7,20,47,103,118,162,171,192,196,242,244,252,259,265,306,329,353,372,382]",
  //       method: "GET",
  //       responseType: "JSON",
  //     });
  //     const data = await response;
  //     console.log(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="App">
      <Header />
      <Contest />
      <Footer />
    </div>
  );
};

export default App;
