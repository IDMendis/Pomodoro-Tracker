import { useState } from "react";

export default function Settings({
  setWorkDuration,
  setShortBreakDuration,
  setLongBreakDuration,
}) {
  const [work, setWork] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);

  const applySettings = () => {
    setWorkDuration(work * 60);
    setShortBreakDuration(shortBreak * 60);
    setLongBreakDuration(longBreak * 60);
  };

  return (
    <div className="settings">
      <h3>Customize Intervals (minutes)</h3>

      <label>
        Work:
        <input
          type="number"
          value={work}
          onChange={(e) => setWork(e.target.value)}
        />
      </label>

      <label>
        Short Break:
        <input
          type="number"
          value={shortBreak}
          onChange={(e) => setShortBreak(e.target.value)}
        />
      </label>

      <label>
        Long Break:
        <input
          type="number"
          value={longBreak}
          onChange={(e) => setLongBreak(e.target.value)}
        />
      </label>

      <button onClick={applySettings}>Apply</button>
    </div>
  );
}
