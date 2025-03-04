import OptionButton from "./OptionButton";

type AllOptionButtonProps = {
  question: {
    question: string;
    options: string[];
    answer: string;
  };
};

const AllOptionButton: React.FC<AllOptionButtonProps> = ({ question }) => {
  return (
    <div className="mt-5 grid grid-cols-2 gap-10  ">
      {question.options.map((option, index) => (
        <OptionButton key={index} option={option} />
      ))}
    </div>
  );
};

export default AllOptionButton;
