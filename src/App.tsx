import { useState } from "react";
import Title from "./components/Title";
import PlayButton from "./components/PlayButton";
import Footer from "./components/Footer";
import Question from "./components/Question";
import AllOptionButton from "./components/AllOptionButton";
import Main from "./components/Main";
import HomePage from "./components/HomePage";
import QuestionPage from "./components/QuestionPage";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <Main>
      <HomePage>
        {isVisible && <Title />}
        {isVisible && <PlayButton onClick={handleClick} />}
      </HomePage>

      <QuestionPage>
        {!isVisible && <Question />}
        {!isVisible && <AllOptionButton />}
      </QuestionPage>

      <Footer />
    </Main>
    // <main className="flex min-h-screen flex-col items-center justify-start gap-2 bg-gradient-to-b from-indigo-500 to-cyan-400">

    // </main>
  );
}

export default App;
