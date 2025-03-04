type OptionButtonProps = {
  option: string;
};

const OptionButton: React.FC<OptionButtonProps> = ({ option }) => {
  return (
    <button className=" rounded-md bg-amber-500 px-20 py-4 text-xl font-bold text-white shadow-md hover:bg-amber-600 ">
      {option}
    </button>
  );
};

export default OptionButton;
