// import { Howl } from "howler";
// import { useEffect } from "react";

type OptionButtonProps = {
  option: string;
  isCorrect: boolean;
  isSelected: boolean;
  onClick: () => void;
  isWaiting: boolean;
  isAnswer: boolean;
};

const OptionButton: React.FC<OptionButtonProps> = ({
  option,
  isCorrect,
  isSelected,
  onClick,
  isWaiting,
  isAnswer,
}) => {
  let buttonClass =
    "rounded-md px-20 py-4 text-xl font-bold text-white shadow-md";

  if (isAnswer) {
    buttonClass += " bg-green-500";
  } else if (isSelected) {
    buttonClass += isCorrect ? " bg-green-500" : " bg-red-500";
  } else {
    buttonClass += " bg-amber-500 hover:bg-amber-600";
  }

  if (isWaiting) {
    buttonClass += " pointer-events-none";
  }

  // useEffect(() => {
  //   const correctSound = new Howl({
  //     src: ["/public/sound/correct-choice.mp3"],
  //     html5: true,
  //   });
  //   const wrongSound = new Howl({
  //     src: ["/public/sound/wrong-choice.mp3"],
  //     html5: true,
  //   });

  //   if (isAnswer) {
  //     correctSound.play();
  //   } else if (isSelected && !isCorrect) {
  //     wrongSound.play();
  //   }
  // }, [isAnswer, isSelected, isCorrect]);

  return (
    <button onClick={onClick} className={buttonClass} disabled={isWaiting}>
      {option}
    </button>
  );
};

export default OptionButton;
