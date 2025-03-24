import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "./components/home/Title";
import PlayButton from "./components/home/PlayButton";
import Footer from "./components/main/Footer";
import Main from "./components/main/Main";
import HomePage from "./components/home/HomePage";
import QuestionPage from "./components/question/QuestionPage";
import allQuestionsData from "./data/questions.json";
import ScorePage from "./components/score/ScorePage";
import AllOptionButton from "./components/question/AllOptionButton";
import DropdownQuestions from "./components/home/DropdownQuestions";

function App() {
  const [questionsData, setQuestionsData] = useState<Question[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [numQuestions, setNumQuestions] = useState(10);

  type Question = {
    question: string;
    options: string[];
    answer: string;
  };

  const getRandomQuestions = useCallback(
    (allQuestionsData: Question[]): Question[] => {
      return [...allQuestionsData]
        .sort(() => Math.random() - 0.5)
        .slice(0, numQuestions);
    },
    [numQuestions],
  );

  useEffect(() => {
    const randomQuestions = getRandomQuestions(allQuestionsData);
    setQuestionsData(randomQuestions);
  }, [getRandomQuestions]);

  const handleClick = () => {
    setIsVisible(false);
  };

  const handleNextQuestion = (isCorrect: boolean) => {
    setIsWaiting(true);
    setHasAnswered(true);

    if (isCorrect) {
      setCorrectAnswers((prevCorrect) => prevCorrect + 1);
      setScore((prevScore) => prevScore + 100 / numQuestions);
    } else {
      setIncorrectAnswers((prevIncorrect) => prevIncorrect + 1);
    }

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

  const handlePlayAgain = () => {
    const randomQuestions = getRandomQuestions(allQuestionsData);
    setQuestionsData(randomQuestions);
    setIsVisible(false);
    setQuestionIndex(0);
    setIsFinished(false);
    setIsWaiting(false);
    setHasAnswered(false);
    setScore(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
  };

  const handleHome = () => {
    setIsVisible(true);
    setQuestionIndex(0);
    setIsFinished(false);
    setIsWaiting(false);
    setHasAnswered(false);
    setScore(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
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
                  transition: { duration: 0.5, delay: 1 },
                }}
              >
                <Title />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
              >
                <DropdownQuestions
                  numQuestions={numQuestions}
                  setNumQuestions={setNumQuestions}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0,
                  transition: { duration: 0.5 },
                }}
              >
                <PlayButton onClick={handleClick} />
              </motion.div>
            </HomePage>
          </motion.div>
        ) : isFinished ? (
          <motion.div
            key="score"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            exit={{ opacity: 0 }}
          >
            <ScorePage
              score={score}
              correctAnswer={correctAnswers}
              incorrectAnswer={incorrectAnswers}
              onPlayAgain={handlePlayAgain}
              onHome={handleHome}
            />
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
