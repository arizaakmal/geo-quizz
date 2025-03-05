import { useState } from "react";
import Title from "./components/home/Title";
import PlayButton from "./components/home/PlayButton";
import Footer from "./components/main/Footer";
import Main from "./components/main/Main";
import HomePage from "./components/home/HomePage";
import QuestionPage from "./components/question/QuestionPage";
import questionsData from "./data/questions.json";
// import Motion from "./components/motion";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => {
    setIsVisible(false);
  };

  const [questionIndex] = useState(0);

  return (
    <Main>
      <HomePage>
        {isVisible && <Title />}
        {isVisible && <PlayButton onClick={handleClick} />}
      </HomePage>

      {!isVisible && (
        <QuestionPage
          questionsData={questionsData}
          questionIndex={questionIndex}
        />
      )}
      {/* <Motion
        isVisible={true}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      /> */}
      <Footer />
    </Main>
  );
}

export default App;
