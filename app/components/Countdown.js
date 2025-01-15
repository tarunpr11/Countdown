"use client";

import { useEffect, useState } from "react";

const eventDate = new Date("2025-02-15T00:00:00").getTime();

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft(); 
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer); 
  }, []);

  if (!timeLeft) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white font-nohemi text-2xl">
        Loading...
      </div>
    );
  }

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  const radius = 330; 

  return (
    <div>
      <div className="flex justify-between px-5">
        <img src="/images/swcGold.png" className="w-48 h-25"></img>
        <img src="/images/vitWhite.png" className="w-48 h-25"></img>
      </div>
      <div className="relative flex flex-col justify-center items-center h-screen">
        <h1 className="orbitron-font title-background z-10" style={{ filter: 'brightness(300%)' }}>
            VIBRANCE '25
        </h1>

        <svg
  className="absolute z-0"
  width="700"
  height="700"
  style={{
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }}
>
  {/* Gray Circle */}
  <circle
    cx="350"
    cy="350"
    r={radius}
    fill="none"
    stroke="#e5e7eb"
    strokeWidth="10"
  />

  {/* Blue Circle with Glow Effect */}
  <circle
    cx="350"
    cy="350"
    r={radius}
    fill="none"
    stroke="#00FFFF"
    strokeWidth="10"
    style={{ filter: "drop-shadow(0 0 15px #00FFFF)" }}  
  />
</svg>

        
        <h1 className="nohemi-font text-white text-9xl z-10" style={{ filter: 'brightness(400%)' }}>
            {formatTime(timeLeft.days)}<span>D</span> : {formatTime(timeLeft.hours)}H : {formatTime(timeLeft.minutes)}M : {formatTime(timeLeft.seconds)}S
        </h1>
        <h3 className="text-white orbitron-font text-3xl my-3 z-10">Coming soon...</h3>
    </div>
    </div>
  );
};

export default Countdown;
