import React, { useState, useEffect } from "react";
import divider from "../assets/images/pattern-divider-desktop.svg";
import dice from "../assets/images/icon-dice.svg";

const AdviceBox = () => {
  const [advice, setAdvice] = useState([]);

  const fetchData = async () => {
    await fetch(`https://api.adviceslip.com/advice`)
      .then((response) => {
        return response.json();
      })
      .then((data) => setAdvice(data.slip));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const adviceText = Object.values(advice);

  return (
    <main className="rounded-xl text-white w-[40vw] bg-[#313A49]">
      <div className="flex m-10 text-center flex-col">
        <h2 className="text-[#53FFAB] tracking-widest text-[16px] mt-2">
          ADVICE #{adviceText[0]}
        </h2>
        <h1 className="text-[#CFE3EA] tracking-wider text-[26px] mt-6">
          &quot;{adviceText[1]}&quot;
        </h1>
        <img className="object-none object-bottom" src={divider} />
      </div>
      <button
        onClick={fetchData}
        className="border-2 border-[#53FFAB] w-14 h-14 bg-[#53FFAB] rounded-full"
      >
        <img className="m-auto" src={dice} />
      </button>
    </main>
  );
};

export default AdviceBox;
