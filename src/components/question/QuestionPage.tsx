import Question from "./Question";
import AllOptionButton from "./AllOptionButton";
import { useState } from "react";

type QuestionPageProps = {
  questionsData: {
    question: string;
    options: string[];
    answer: string;
  }[];
  questionIndex: number;
};

const QuestionPage: React.FC<QuestionPageProps> = ({
  questionsData,
  questionIndex,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(questionIndex);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const question = questionsData[currentQuestionIndex];

  return (
    <div>
      <Question question={question} />
      <AllOptionButton question={question} onOptionClick={handleNextQuestion} />
    </div>
  );
};

export default QuestionPage;
