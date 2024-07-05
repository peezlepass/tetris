export default function GameStats({ currentScore }) {
  return (
    <div className="text-white font-gameOver text-3xl">
      Your score: {currentScore}
    </div>
  );
}
