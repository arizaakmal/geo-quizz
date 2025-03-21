import { useState, useEffect } from "react";
import { useMotionValue, animate } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Howl } from "howler";

type ScorePageProps = {
  score: number;
  onPlayAgain: () => void;
  onHome: () => void;
};

const ScorePage: React.FC<ScorePageProps> = ({
  score,
  onPlayAgain,
  onHome,
}) => {
  const count = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (score > 0) {
      const progressSound = new Howl({
        src: ["/sound/progress.mp3"],
        html5: true,
        volume: 0.1,
      });

      progressSound.play();
    }

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
    <div className="mt-24 flex h-auto flex-col items-center justify-center rounded-xl bg-teal-500 p-5 text-center shadow-xl">
      <h1 className="font-bungee text-5xl font-bold text-gray-200 drop-shadow-lg">
        Your score:
      </h1>
      <div className="flex flex-col items-center">
        <div className="mt-10 flex w-full min-w-[220px] items-center justify-center rounded-xl bg-amber-500 px-12 py-6 shadow-lg">
          <h3 className="flex items-center text-6xl font-bold text-white drop-shadow-lg">
            {displayCount}
            <span className="ml-2 text-2xl font-normal">%</span>
          </h3>
        </div>
        <div className="mt-6 flex w-full max-w-[300px] justify-center space-x-6 text-2xl font-semibold text-gray-200">
          <p className="flex w-1/2 min-w-[100px] items-center justify-center space-x-2 rounded-lg bg-green-500 px-6 py-4 shadow-md">
            <FontAwesomeIcon icon={faCheck} className="text-2xl" />
            <span className="text-5xl font-bold">10</span>
          </p>
          <p className="flex w-1/2 min-w-[100px] items-center justify-center space-x-2 rounded-lg bg-red-500 px-6 py-4 shadow-md">
            <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            <span className="text-5xl font-bold">3</span>
          </p>
        </div>
      </div>
      <div className="mt-12 flex space-x-4">
        <button
          onClick={onHome}
          className="rounded-full bg-amber-500 px-8 py-3 text-2xl font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-amber-600 active:translate-y-1"
        >
          <FontAwesomeIcon icon={faHome} />
        </button>
        <button
          onClick={onPlayAgain}
          className="rounded-full bg-amber-500 px-8 py-3 text-2xl font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-amber-600 active:translate-y-1"
        >
          <FontAwesomeIcon icon={faRedo} />
        </button>
      </div>
    </div>
  );
};

export default ScorePage;
