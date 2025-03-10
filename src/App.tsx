import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      <AnimatePresence mode="wait">
        {isVisible ? (
          <motion.div key="home">
            <HomePage>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0,
                  transition: { duration: 0.5, delay: 0.7 },
                }}
              >
                <Title />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 20,
                  scale: 0,
                  transition: { duration: 0.5 },
                }}
              >
                <PlayButton onClick={handleClick} />
              </motion.div>
            </HomePage>
          </motion.div>
        ) : isFinished ? (
          <motion.div key="score">
            <ScorePage />
          </motion.div>
        ) : (
          <motion.div
            key="question"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.5,
              scale: { type: "spring", stiffness: 150, damping: 15 },
            }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </Main>
  );
}

export default App;
