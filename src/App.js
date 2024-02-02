import React from "react";
import "./styles.css";
import Header from "./Header";
import Kobe from "./Kobe";
import Introduction from "./Introduction";
import OurGames from "./OurGames";
import Games from "./Games";
import { gamesData } from "./data"; 
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Kobe />
      <Introduction />
      <OurGames />
      <div className="games-container">
        {gamesData.map((game, index) => (
          <Games key={index} gamesObj={game} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
