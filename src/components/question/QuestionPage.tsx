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
  const [isWaiting, setIsWaiting] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setIsWaiting(true);
      setHasAnswered(true);
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsWaiting(false);
        setHasAnswered(false);
      }, 1000);
    }
  };

  const question = questionsData[currentQuestionIndex];

  return (
    <div>
      <Question question={question} />
      <AllOptionButton
        question={question}
        onOptionClick={handleNextQuestion}
        isWaiting={isWaiting}
        hasAnswered={hasAnswered}
      />
    </div>
  );
};

export default QuestionPage;
