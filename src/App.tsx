import { useState } from "react";
import Title from "./components/Title";
import PlayButton from "./components/PlayButton";
import Footer from "./components/Footer";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-2 bg-gradient-to-b from-indigo-500 to-cyan-400">
      {isVisible && <Title />}
      {isVisible && <PlayButton onClick={handleClick} />}
      <Footer />
    </main>
  );
}

export default App;
