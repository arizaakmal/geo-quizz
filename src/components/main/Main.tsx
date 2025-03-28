const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-b from-indigo-500 to-cyan-400">
      {children}
    </main>
  );
};

export default Main;
