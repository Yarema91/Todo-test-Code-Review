import { useState, useRef } from "react";
import { useAppDispatch } from "../api/hooks";
import { getTodoItem } from "../store/todoSlice";

export const AddTodo = () => {
  const dispatch = useAppDispatch();

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const [validationError, setValidationError] = useState({
    isTitleFilled: true,
    isDescriptionFilled: true,
  });

  const addTodoToStore = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const titleValue = titleRef.current?.value.trim() || "";
    const descriptionValue = descriptionRef.current?.value.trim() || "";
    const id = Math.floor(Math.random() * 10000) + 1;

    const validationState = {
      isTitleFilled: !!titleValue,
      isDescriptionFilled: !!descriptionValue,
    };
    setValidationError(validationState);

    if (titleValue && descriptionValue) {
      dispatch(
        getTodoItem({ titleValue, descriptionValue, id, status: false })
      );

      if (titleRef.current) {
        titleRef.current.value = "";
      }
      if (descriptionRef.current) {
        descriptionRef.current.value = "";
      }
    }
  };

  return (
    <>
      <form className="addtodo__form" onSubmit={addTodoToStore}>
        <label>Title</label>
        <input
          type="text"
          id="title-task"
          placeholder="Enter title"
          className={`${
            !validationError.isTitleFilled && "addtodoInput__error"
          }`}
          ref={titleRef}
        />
        {!validationError.isTitleFilled && (
          <span className="errormessage">This field is empty</span>
        )}
        <label>Description</label>
        <input
          type="text"
          id="desription-task"
          placeholder="Enter description"
          className={`${
            !validationError.isDescriptionFilled && "addtodoInput__error"
          }`}
          ref={descriptionRef}
        />
        {!validationError.isDescriptionFilled && (
          <span className="errormessage">This field is empty</span>
        )}
        <button type="submit" className="addtodo__btn">
          Create
        </button>
      </form>
    </>
  );
};
