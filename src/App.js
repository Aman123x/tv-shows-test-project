import React, { useState, useEffect } from "react";
import "./App.css";
import ShowDetails from "./Components/ShowDetails";
import TvShows from "./Components/TvShows";
import { Routes, Route } from "react-router-dom";

function App() {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    CallShowApi();
  }, []);

  async function CallShowApi() {
    try {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await response.json();
      setShowData(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Routes>
      <Route path="/" element={<TvShows showData={showData} />} />
      <Route path="details/:id" element={<ShowDetails showData={showData} />} />
    </Routes>
  );
}

export default App;
