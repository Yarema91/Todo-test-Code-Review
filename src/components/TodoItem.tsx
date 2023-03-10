import { TodoTypes } from "../types/types";
import { useState } from "react";
import { Modal } from "./Modal/Modal";

export const TodoItem: React.FC<TodoTypes> = ({
  id,
  titleValue,
  descriptionValue,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checked, setChecked] = useState(false); 

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function statusDone(event: any) {
    setChecked(!checked)    
  }

  return (
    <>
      <tr onClick={openModal}>
        <td className="todoItem__row">{id}</td>
        <td className="todoItem__row">{titleValue}</td>
        <td className="todoItem__row">{descriptionValue}</td>
        <td className="todoItem__row">
          <input type="checkbox"  onChange={statusDone} />
        </td>
      </tr>

      <Modal isModalOpen={isModalOpen}>
        <>
        <div className="modal-body">
          <h1>Title: {titleValue}</h1>
          <h2>Description:</h2>
          <p>{descriptionValue}</p>
          <div className="modal__status">
            <span>Status: {checked? "Done": "Need to do"}</span>
          </div>
          <button onClick={closeModal} className='modalClose_btn'>Close Modal</button>
          </div>
        </>
      </Modal>
    </>
  );
};
