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
  const question = questionsData[questionIndex];

  return (
    <div>
      <Question question={question} />
      {children}
    </div>
  );
};

export default QuestionPage;
