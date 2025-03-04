import Question from "./Question";
import AllOptionButton from "./AllOptionButton";

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
  const question = questionsData[questionIndex];

  return (
    <div>
      <Question question={question} />
      <AllOptionButton question={question} />
    </div>
  );
};

export default QuestionPage;
