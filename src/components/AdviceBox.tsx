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
    <div className="flex flex-col">
      <main className="rounded-xl text-white w-[40vw] bg-[#313A49]">
        <div className="flex m-10 text-center flex-col">
          <h2 className="text-[#53FFAB] tracking-widest text-[16px] mt-2">
            ADVICE #{adviceText[0]}
          </h2>
          <h1 className="text-[#CFE3EA] tracking-wider text-[26px] mt-6">
            &quot;{adviceText[1]}&quot;
          </h1>
        </div>
        <img className="w-[75%] m-auto pb-16" src={divider} />
      </main>
      <div className="flex justify-center -mt-7">
        <button
          onClick={fetchData}
          className="border-2 hover:shadow-md hover:shadow-[#53FFAB] border-[#53FFAB] w-14 h-14 bg-[#53FFAB] rounded-full"
        >
          <img className="m-auto" src={dice} />
        </button>
      </div>
    </div>
  );
};

export default AdviceBox;
