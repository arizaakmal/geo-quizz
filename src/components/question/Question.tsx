import React from "react";

type QuestionProps = {
  questionsData: {
    question: string;
    options: string[];
    answer: string;
  }[];
  questionIndex: number;
};

const Question: React.FC<QuestionProps> = ({
  questionsData,
  questionIndex,
}) => {
  const question = questionsData[questionIndex];

  return (
    <div className="relative mt-20 flex h-auto w-full items-center justify-center rounded bg-indigo-700/30 p-4 text-gray-200 shadow-lg">
      <span className="absolute -top-3 rounded-full bg-teal-500 px-3 py-1 text-sm font-semibold text-gray-200 shadow-md">
        {questionIndex + 1} / {questionsData.length}
      </span>
      <h2 className="m-16 sm:m-20 flex items-center justify-center text-center text-xl font-bold">
        {question.question}
      </h2>
    </div>
  );
};

export default Question;
