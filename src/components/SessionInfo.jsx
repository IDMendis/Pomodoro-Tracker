export default function SessionInfo({ sessionType, completedSessions }) {
  return (
    <div className="session-info">
      <h2>{sessionType} Session</h2>
      <p>Completed Work Sessions: {completedSessions}</p>
    </div>
  );
}
