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

  return (
    <button onClick={onClick} className={buttonClass} disabled={isWaiting}>
      {option}
    </button>
  );
};

export default OptionButton;
