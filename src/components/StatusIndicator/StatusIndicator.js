import './StatusIndicator.css'

const StatusIndicator = ({ status }) => {
  return (
    <div className="status-indicator" style={{backgroundColor: status ? "#0a0" : "", borderColor: status ? "#0a0" : "#777"}}>
      <div className="status-radial" style={{backgroundColor: status ? "#0a0" : "rgba(0, 0, 0, 0)", borderColor: status ? "#0a0" : "rgba(0, 0, 0, 0)", animation: status ? "cubic-bezier(0.25,0.46,0.45,0.94) 2s infinite radial-pulse" : ""}} />
    </div>
  );
}

export default StatusIndicator;
