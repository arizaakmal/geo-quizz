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
    <div className="mt-20 flex h-auto w-full  items-center justify-center rounded bg-indigo-700/30 p-4 text-gray-200 shadow-lg">
      <h2 className="m-20  flex items-center justify-center text-center text-xl font-bold">
        {question.question}
      </h2>
    </div>
  );
};

export default Question;
