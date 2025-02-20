function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-2 bg-gradient-to-b from-indigo-500 to-cyan-400">
      <h1 className="mt-20 font-bungee text-9xl font-bold text-gray-200">
        Geo Quizz
      </h1>
      <button className="mt-10 rounded-full bg-amber-500 px-8 py-4 text-2xl font-bold text-white shadow-lg transition hover:bg-amber-600 active:translate-y-1">
        Play
      </button>
      <footer>
        <span>Copyright  </span>
      </footer>
    </main>
  );
}

export default App;
