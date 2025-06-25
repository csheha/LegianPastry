import "../styles/Model.css";

export default function Model({ children, onClose }) {
  return (
    <div
      className="modal"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 100,
        left: 0,
        width: "100vw",
        height: "90vh",
      }}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
