import { useState, useEffect, useRef } from "react";
import Timer from "./components/Timer";
import Controls from "./components/Controls";
import Settings from "./components/Settings";
import SessionInfo from "./components/SessionInfo";
import "./App.css";

export default function App() {
  const [workDuration, setWorkDuration] = useState(25 * 60);
  const [shortBreakDuration, setShortBreakDuration] = useState(5 * 60);
  const [longBreakDuration, setLongBreakDuration] = useState(15 * 60);

  const [timeLeft, setTimeLeft] = useState(workDuration);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionType, setSessionType] = useState("Work");
  const [completedSessions, setCompletedSessions] = useState(0);

  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  // Timer logic
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            handleSessionEnd();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleSessionEnd = () => {
    audioRef.current.play();

    if (sessionType === "Work") {
      const newCount = completedSessions + 1;
      setCompletedSessions(newCount);

      if (newCount % 4 === 0) {
        setSessionType("Long Break");
        setTimeLeft(longBreakDuration);
      } else {
        setSessionType("Short Break");
        setTimeLeft(shortBreakDuration);
      }
    } else {
      setSessionType("Work");
      setTimeLeft(workDuration);
    }

    setIsRunning(false);
  };

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setSessionType("Work");
    setTimeLeft(workDuration);
    setCompletedSessions(0);
  };

  return (
    <div className="app">
      <h1>🍅 Pomodoro Tracker</h1>

      <SessionInfo
        sessionType={sessionType}
        completedSessions={completedSessions}
      />

      <Timer timeLeft={timeLeft} />

      <Controls
        isRunning={isRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
      />

      <Settings
        setWorkDuration={setWorkDuration}
        setShortBreakDuration={setShortBreakDuration}
        setLongBreakDuration={setLongBreakDuration}
      />

      <audio
        ref={audioRef}
        src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
      />
    </div>
  );
}
