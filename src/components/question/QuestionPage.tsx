import { ReactNode } from "react";
import Question from "./Question";

type QuestionPageProps = {
  questionsData: {
    question: string;
    options: string[];
    answer: string;
  }[];
  questionIndex: number;
  children: ReactNode;
};

const QuestionPage: React.FC<QuestionPageProps> = ({
  questionsData,
  questionIndex,
  children,
}) => {
  return (
    <>
      <Question questionsData={questionsData} questionIndex={questionIndex} />
      {children}
    </>
  );
};

export default QuestionPage;
