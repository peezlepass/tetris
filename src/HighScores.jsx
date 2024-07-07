// highScore looks like this: [{name: Ell, score: 830}, {name: Jam, score: 510}, ]
export default function HighScores({ highScores }) {
  return (
    <div className="text-white font-gameOver text-3xl h-gameHeight grid grid-cols-1 grid-rows-[auto_1fr] pl-20 ">
      <h2 className="w-full mb-10">High Scores:</h2>
      <ol>
        {highScores.map((highScore) => {
          return (
            <li>
              {highScore.name}: {highScore.score}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
