"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [hit, setHit] = useState(Math.floor(Math.random() * 9) + 1);
  const [intervalId, setIntervalId] = useState(null);
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    const initialButtons = Array.from({ length: 144 }, () => Math.floor(Math.random() * 9) + 1);
    setButtons(initialButtons);
  }, [score]);
  
  // Load highscore from localStorage when the component mounts
  useEffect(() => {
    const savedHighscore = localStorage.getItem('highscore');
    if (savedHighscore) {
      setHighscore(JSON.parse(savedHighscore));
    }
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer <= 1) {
          clearInterval(id);
          router.replace("/youlost"); // Navigate to /youlost when timer reaches zero
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  const checkNumber = (number) => {
    if (number === hit) {
      setHit(Math.floor(Math.random() * 9) + 1);
      setScore(prevScore => {
        const newScore = prevScore + 10;
        if (newScore > highscore) {
          localStorage.setItem('highscore', JSON.stringify(newScore));
          setHighscore(newScore);
        }
        return newScore;
      });
    } else {
      clearInterval(intervalId);
      setTimer(60);
      router.replace("/youlost");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-blue-800">
      <div className="bg-slate-800 h-16 text-white w-4/5 h-auto flex justify-center items-center gap-3">
        <div className="flex items-center gap-5">
          <div>Highscore: </div>
          <div className="highscore bg-white text-black p-2 rounded-md">{highscore}</div>
        </div>
        <div className="flex items-center gap-5">
          <div>Score: </div>
          <div className="score bg-white text-black p-2 rounded-md">{score}</div>
        </div>
        <div className=" flex items-center gap-5">
          <div>Timer: </div>
          <div className="timer bg-white text-black p-2 rounded-md">{timer}</div>
        </div>
        <div className="flex items-center gap-5">
          <div>Hit: </div>
          <div className="hit bg-white text-black p-2 rounded-md">{hit}</div>
        </div>
      </div>
      <div className="bg-blue-100 w-4/5 py-4 px-4 grid grid-cols-12 gap-2 ">
        {buttons.map((number, index) => (
          <button
            key={index}
            value={number}
            className="button-number bg-blue-500 hover:bg-blue-800 text-white p-2 rounded"
            onClick={() => checkNumber(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}
