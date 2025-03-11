import { useState, useEffect } from "react";
import { useMotionValue, animate } from "framer-motion";

type ScorePageProps = {
  score: number;
};

const ScorePage: React.FC<ScorePageProps> = ({ score }) => {
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
      <h1 className="mt-20 animate-fade-in font-bungee text-9xl font-bold text-gray-200">
        Score Page
      </h1>
      <div className="mt-20 flex flex-col items-center">
        <h3 className="animate-fade-in font-bungee text-5xl font-bold text-gray-200">
          {displayCount}%
        </h3>
        <button className="mt-10 animate-fade-in rounded-full bg-amber-500 px-8 py-4 text-2xl font-bold text-white shadow-lg transition hover:bg-amber-600 active:translate-y-1">
          Play Again
        </button>
      </div>
    </>
  );
};

export default ScorePage;
