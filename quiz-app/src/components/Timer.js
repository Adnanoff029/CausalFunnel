import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 30 minutes in seconds
  const router = useRouter();
  useEffect(() => {
    if (timeLeft <= 0) {
      router.push("/result"); // Redirect to the desired page when the timer ends
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [timeLeft, router]);

  // Format timeLeft into mm:ss
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds - hours * 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div
      className="bg-blue-300 p-2 rounded-md text-md font-[500
  ]"
    >
      <p>{formatTime(timeLeft)}</p>
    </div>
  );
};

export default Timer;
