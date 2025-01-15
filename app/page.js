"use client"
import Countdown from "../app/components/Countdown";
import Summary from "./components/summary";

export default function Home() {
  return(
    <div>
      <Countdown />
      <Summary />
    </div>
  );
}
