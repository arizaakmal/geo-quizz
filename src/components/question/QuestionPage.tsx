import Question from "./Question";
import AllOptionButton from "./AllOptionButton";

type QuestionPageProps = {
  questionsData: {
    question: string;
    options: string[];
    answer: string;
  }[];
  questionIndex: number;
  onNextQuestion: () => void;
  isWaiting: boolean;
  hasAnswered: boolean;
};

const QuestionPage: React.FC<QuestionPageProps> = ({
  questionsData,
  questionIndex,
  onNextQuestion,
  isWaiting,
  hasAnswered,
}) => {
  const question = questionsData[questionIndex];

  return (
    <div>
      <Question question={question} />
      <AllOptionButton
        question={question}
        onOptionClick={onNextQuestion}
        isWaiting={isWaiting}
        hasAnswered={hasAnswered}
      />
    </div>
  );
};

export default QuestionPage;
