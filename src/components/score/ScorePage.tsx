import { useState, useEffect } from "react";
import { useMotionValue, animate } from "framer-motion";

type ScorePageProps = {
  score: number;
  onPlayAgain: () => void;
};

const ScorePage: React.FC<ScorePageProps> = ({ score, onPlayAgain }) => {
  const count = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const controls = animate(count, score, { duration: 3 });

    const unsubscribe = count.on("change", (latest) => {
      setDisplayCount(Math.round(latest));
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, score]);
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-center">
        <h1 className="animate-fade-in font-bungee text-7xl font-bold text-amber-400 drop-shadow-lg">
          Score
        </h1>
        <div className="mt-10 rounded-xl bg-gray-800 p-8 shadow-lg">
          <h3 className="animate-fade-in text-6xl font-bold text-white drop-shadow-lg">
            {displayCount}
          </h3>
        </div>
        <button
          onClick={onPlayAgain}
          className="mt-12 animate-fade-in rounded-full bg-amber-500 px-10 py-4 text-2xl font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-amber-600 active:translate-y-1"
        >
          Play Again
        </button>
      </div>
    </>
  );
};

export default ScorePage;
