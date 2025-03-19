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
    <>
      <div className="flex min-h-screen flex-col items-center justify-center    text-center">
        <h1 className="animate-fade-in font-bungee text-5xl font-bold text-gray-200 drop-shadow-lg">
          Your score:
        </h1>
        <div className="mt-10 flex size-32 items-center justify-center rounded-xl  bg-[#00CC66] p-8 shadow-lg">
          <h3 className="animate-fade-in text-6xl font-bold text-white drop-shadow-lg">
            {displayCount}
          </h3>
        </div>

        <div className="mt-12 flex space-x-4">
          <button
            onClick={onHome}
            className="animate-fade-in rounded-full bg-amber-500 px-8 py-3 text-2xl font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-amber-600 active:translate-y-1"
          >
            <FontAwesomeIcon icon={faHome} />
          </button>
          <button
            onClick={onPlayAgain}
            className="animate-fade-in rounded-full bg-amber-500 px-8 py-3 text-2xl font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-amber-600 active:translate-y-1"
          >
            <FontAwesomeIcon icon={faRedo} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ScorePage;
