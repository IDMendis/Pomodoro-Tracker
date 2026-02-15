export default function Timer({ timeLeft }) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div
      className="timer"
      role="timer"
      aria-live="polite"
      aria-label="Pomodoro countdown timer"
    >
      {String(minutes).padStart(2, "0")}:
      {String(seconds).padStart(2, "0")}
    </div>
  );
}
