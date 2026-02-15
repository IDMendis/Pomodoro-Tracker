export default function Controls({
  isRunning,
  startTimer,
  stopTimer,
  resetTimer,
}) {
  return (
    <div className="controls">
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>

      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>

      <button onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
}
