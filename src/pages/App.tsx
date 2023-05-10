import React from "react";
import "../css/index.css";
import AdviceBox from "../components/AdviceBox";

const App: React.FC = () => {
  return (
    <main className="bg-[#202632] h-screen flex justify-center items-center">
      <AdviceBox />
    </main>
  );
};

export default App;
