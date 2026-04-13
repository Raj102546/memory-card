export function Gameover({ bestscore, show, restart }) {
  return (
    <>
      {show && (
        <div className="overlay">
          <div className="modal gameover">
            <span className="emoji">💀</span>
            <h2>Game Over!</h2>
            <p>Best Score</p>
            <div className="final-score">{bestscore}</div>
            <button onClick={() => restart()}>Try Again</button>
          </div>
        </div>
      )}
    </>
  );
}

export function Winner({ score, show, restart }) {
  return (
    <>
      {show && (
        <div className="overlay">
          <div className="modal winner">
            <span className="emoji">🏆</span>
            <h2>You Won!</h2>
            <p>Perfect Score</p>
            <div className="final-score">{score}</div>
            <button onClick={() => restart()}>Play Again</button>
          </div>
        </div>
      )}
    </>
  );
}
