export default function GameStats({ currentScore }) {
  return (
    <div className="text-white font-gameOver text-3xl h-gameHeight flex justify-center">
      Your score: {currentScore}
    </div>
  );
}
