type TimeProps = {
  timeLeft: number;
};

const Time: React.FC<TimeProps> = ({ timeLeft }) => {
  const maxTime = 10;
  const progress = (timeLeft / maxTime) * 100;

  return (
    <div className="mb-4 mt-10 h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700">
      <div
        className="h-4 rounded-full bg-yellow-300 transition-all duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default Time;
