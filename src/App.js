import React from "react";
import BarGraph from "./components/BarGraph";
import Hero from "./components/Hero";
import MiddleSection from "./components/MiddleSection";
import PieChartComponent from "./components/PieChartComponent";

const App = () => {
  return (
    <>
      <Hero />
      <MiddleSection />
      <BarGraph />
      <PieChartComponent />
    </>
  );
};

export default App;
