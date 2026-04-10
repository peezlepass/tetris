export default function GameStats({ currentScore }) {
  return (
    <div className="text-white font-gameOver text-lg sm:text-3xl md:h-gameHeight flex justify-center py-2 md:py-0">
      Your score: {currentScore}
    </div>
  );
}
