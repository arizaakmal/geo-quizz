import { ReactNode } from "react";
import Question from "./Question";
import Time from "./Time";

type QuestionPageProps = {
  questionsData: {
    question: string;
    options: string[];
    answer: string;
  }[];
  questionIndex: number;
  children: ReactNode;
  timeLeft: number;
};

const QuestionPage: React.FC<QuestionPageProps> = ({
  questionsData,
  questionIndex,
  children,
  timeLeft,
}) => {
  return (
    <>
      <Time timeLeft={timeLeft} />
      <Question questionsData={questionsData} questionIndex={questionIndex} />
      {children}
    </>
  );
};

export default QuestionPage;
