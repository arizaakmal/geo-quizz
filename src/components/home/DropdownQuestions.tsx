type DropdownQuestionsProps = {
  numQuestions: number;
  setNumQuestions: (num: number) => void;
};

const DropdownQuestions: React.FC<DropdownQuestionsProps> = ({
  numQuestions,
  setNumQuestions,
}) => {
  return (
    <div className="mt-6 flex flex-col items-center justify-center">
      <label className="text-xl font-semibold text-white">Questions:</label>
      <select
        value={numQuestions}
        onChange={(e) => setNumQuestions(Number(e.target.value))}
        className="mt-2 rounded-xl px-4 py-2 text-amber-500  shadow-md focus:outline-none"
      >
        {[5, 10, 20, 30, 40, 50].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownQuestions;
