import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../api/hooks";
import { getTodoItem } from "../store/todoSlice";

export const AddTodo = () => {
  const dispatch = useAppDispatch();
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const { todoList, isDescriptionFilled, isTitleFilled } = useAppSelector(
    (state: { todolist: any }) => state.todolist
  );
  const id = todoList.length + 1;
  const passTodoToStore = () => {
    dispatch(getTodoItem({ titleValue, descriptionValue, id }));
    setTitleValue("");
    setDescriptionValue("");
  };

  return (
    <>
      <div className="addtodo__form">
        <h1 hidden>AddTodo</h1>
        <ul className="addtodo__list">
          <li className="addtodo__item">
            <h3>Title</h3>
            <input
              type="text"
              id="title-task"
              placeholder="Enter title"
              className={`${!isTitleFilled && "addtodoInput__error"}`}
              value={titleValue}
              onChange={(e: { target: { value: any } }) =>
                setTitleValue(e.target.value)
              }
            />
            {!isTitleFilled && (
              <span className="errormessage">This field is empty</span>
            )}
          </li>
          <li className="addtodo__item">
            <h3>Description</h3>
            <input
              type="text"
              id="desription-task"
              placeholder="Enter description"
              className={`${!isDescriptionFilled && "addtodoInput__error"}`}
              value={descriptionValue}
              onChange={(e: { target: { value: any } }) =>
                setDescriptionValue(e.target.value)
              }
            />
            {!isDescriptionFilled && (
              <span className="errormessage">This field is empty</span>
            )}
          </li>
        </ul>
        <button
          type="button"
          className="addtodo__btn"
          onClick={() => passTodoToStore()}
        >
          Create
        </button>
      </div>
    </>
  );
};
