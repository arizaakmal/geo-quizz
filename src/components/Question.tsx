import React from "react";

type QuestionProps = {
  question: {
    question: string;
    options: string[];
    answer: string;
  };
};

const Question: React.FC<QuestionProps> = ({ question }) => {
  return (
    <div className="mt-20 flex h-44 w-full max-w-2xl items-center justify-center rounded bg-indigo-700/30 p-4 text-gray-200 shadow-lg">
      <h2 className="text-center text-xl font-bold">{question.question}</h2>
      {/* <div className="mt-4 grid grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
          >
            {option}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default Question;
