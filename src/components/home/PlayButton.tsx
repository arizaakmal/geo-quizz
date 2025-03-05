type PlayButtonProps = {
  onClick: () => void;
};

const PlayButton: React.FC<PlayButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-10 animate-fade-in rounded-full bg-amber-500 px-8 py-4 text-2xl font-bold text-white shadow-lg transition hover:bg-amber-600 active:translate-y-1"
    >
      Play
    </button>
  );
};

export default PlayButton;
