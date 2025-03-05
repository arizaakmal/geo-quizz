import React, { useState } from "react";
import OptionButton from "./OptionButton";
// import { AnimatePresence } from "motion/react";
// import { motion } from "motion/react";

type AllOptionButtonProps = {
  question: {
    question: string;
    options: string[];
    answer: string;
  };
  onOptionClick: () => void;
};
const AllOptionButton: React.FC<AllOptionButtonProps> = ({
  question,
  onOptionClick,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
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
          onClick={() => handleOptionClick(option)}
        />
      ))}
    </div>
  );
};

export default AllOptionButton;
