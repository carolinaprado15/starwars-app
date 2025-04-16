import { ModalProps } from "./types";
import { Card } from "../Card/Card";
import "./Modal.css";

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <div
      className={`modal-overlay ${open ? " open" : ""}`}
      onClick={() => onClose()}
    >
      <div
        className={`modal-content ${open ? " open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Card width={700} height={500}>
          {open && children}
        </Card>
      </div>
    </div>
  );
}

export { Modal };