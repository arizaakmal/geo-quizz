import React, { useState } from "react";
import OptionButton from "./OptionButton";
import { Howl } from "howler";

type AllOptionButtonProps = {
  question: {
    question: string;
    options: string[];
    answer: string;
  };
  onOptionClick: () => void;
  isWaiting: boolean;
  hasAnswered: boolean;
};
const AllOptionButton: React.FC<AllOptionButtonProps> = ({
  question,
  onOptionClick,
  isWaiting,
  hasAnswered,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);

    const correctSound = new Howl({
      src: ["/public/sound/correct-choice.mp3"],
      html5: true,
    });
    const wrongSound = new Howl({
      src: ["/public/sound/wrong-choice.mp3"],
      html5: true,
    });

    if (option === question.answer) {
      correctSound.play();
    } else {
      wrongSound.play();
    }

    onOptionClick();
  };

  return (
    <div className="mt-5 grid grid-cols-2 gap-10  ">
      {question.options.map((option, index) => (
        <OptionButton
          key={index}
          option={option}
          isCorrect={selectedOption === option && option === question.answer}
          isSelected={selectedOption === option}
          isAnswer={hasAnswered && option === question.answer}
          onClick={() => handleOptionClick(option)}
          isWaiting={isWaiting}
        />
      ))}
    </div>
  );
};

export default AllOptionButton;
