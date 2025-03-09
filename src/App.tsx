import { useState } from "react";
import Title from "./components/home/Title";
import PlayButton from "./components/home/PlayButton";
import Footer from "./components/main/Footer";
import Main from "./components/main/Main";
import HomePage from "./components/home/HomePage";
import QuestionPage from "./components/question/QuestionPage";
import questionsData from "./data/questions.json";
import ScorePage from "./components/score/ScorePage";
import AllOptionButton from "./components/question/AllOptionButton";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleClick = () => {
    setIsVisible(false);
  };

  const handleNextQuestion = () => {
    setIsWaiting(true);
    setHasAnswered(true);

    setTimeout(() => {
      if (questionIndex < questionsData.length - 1) {
        setQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        setIsFinished(true);
      }
      setIsWaiting(false);
      setHasAnswered(false);
    }, 1500);
  };

  return (
    <Main>
      {isVisible ? (
        <HomePage>
          <Title />
          <PlayButton onClick={handleClick} />
        </HomePage>
      ) : isFinished ? (
        <ScorePage />
      ) : (
        <QuestionPage
          questionsData={questionsData}
          questionIndex={questionIndex}
        >
          <AllOptionButton
            question={questionsData[questionIndex]}
            onOptionClick={handleNextQuestion}
            isWaiting={isWaiting}
            hasAnswered={hasAnswered}
          />
        </QuestionPage>
      )}
      <Footer />
    </Main>
  );
}

export default App;
