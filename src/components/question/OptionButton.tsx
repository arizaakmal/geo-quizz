type OptionButtonProps = {
  option: string;
  isCorrect: boolean;
  isSelected: boolean;
  onClick: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const OptionButton: React.FC<OptionButtonProps> = ({
  option,
  isCorrect,
  isSelected,
  onClick,
}) => {
  let buttonClass =
    "rounded-md px-20 py-4 text-xl font-bold text-white shadow-md";

  if (isSelected) {
    buttonClass += isCorrect ? " bg-green-500" : " bg-red-500";
  } else {
    buttonClass += " bg-amber-500 hover:bg-amber-600";
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {option}
    </button>
  );
};

export default OptionButton;
