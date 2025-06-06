import { useState, useEffect } from "react";
import { useMotionValue, animate } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Howl } from "howler";

type ScorePageProps = {
  score: number;
  onPlayAgain: () => void;
  onHome: () => void;
  correctAnswer: number;
  incorrectAnswer: number;
};

const ScorePage: React.FC<ScorePageProps> = ({
  score,
  onPlayAgain,
  onHome,
  correctAnswer,
  incorrectAnswer,
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
    <div className="flex h-auto flex-col items-center justify-center rounded-xl bg-teal-500 p-5 text-center shadow-xl">
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
          <div className="flex w-1/2 min-w-[100px] flex-col items-center justify-center space-y-1 rounded-lg bg-green-500 px-6 py-2 shadow-md">
            <div className="flex items-center space-x-2">
              <span className="text-4xl">{correctAnswer}</span>
            </div>
            <p className="text-lg ">Correct</p>
          </div>
          <div className="flex w-1/2 min-w-[100px] flex-col items-center justify-center space-y-1 rounded-lg bg-red-500 px-6 py-2 shadow-md">
            <div className="flex items-center space-x-2">
              <span className="text-4xl">{incorrectAnswer}</span>
            </div>
            <p className="text-lg ">Incorrect</p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex space-x-4">
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
