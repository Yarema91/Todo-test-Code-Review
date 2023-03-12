import "./Modal.css";
import { TodoTypes } from "./../../types/types";

export interface ModalProps {
  onClose: () => void;
  todo: TodoTypes;
}

export const Modal: React.FC<ModalProps> = ({ onClose, todo }) => {
  const { titleValue, descriptionValue } = todo;

  return (
    <>
      {/* className={`modal ${onClose() ? "open" : ""}`} */}
      {/* {children} */}

      <div className="modal-body">
        <h3>Title: {titleValue}</h3>
        <h3>Description: {descriptionValue}</h3>
        <span className="modal__status">
          Status: {todo.status ? "Done" : "Need to do"}
        </span>
        <button onClick={onClose} className="modalClose_btn">
          Close Modal
        </button>
      </div>
    </>
  );
};
