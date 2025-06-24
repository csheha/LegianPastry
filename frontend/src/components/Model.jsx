import React from "react";
import "../styles/Model.css"; // Updated CSS file with scoped styles

export default function Modal({ children, onClose }) {
  return (
    <>
      <div className="legian-backdrop" onClick={onClose}></div>
      <div className="legian-modal">{children}</div>
    </>
  );
}
