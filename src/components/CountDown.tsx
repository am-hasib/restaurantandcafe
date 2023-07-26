"use client";
import Countdown from "react-countdown";
const endingDate = new Date("2023-07-30");
const CountDown = () => {
  return (
    <p>
      <Countdown
        date={endingDate}
        className="text-yellow-300 text-3xl font-bold tracking-[2px]"
      />
    </p>
  );
};

export default CountDown;
