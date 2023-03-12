import { TodoTypes } from "../types/types";
import { updateTodoStatus } from "../store/todoSlice";
import { useAppDispatch } from "../api/hooks";
import React from "react";

interface TodoItemProps {
  todo: TodoTypes;
  onTodoClick: (id: number) => void;
  selectedTodo: TodoTypes | null;
}

export const TodoItem: React.FC<TodoItemProps> = React.memo(
  ({ todo, onTodoClick, selectedTodo }) => {
    const dispatch = useAppDispatch();

    const { id, titleValue, descriptionValue } = todo;

    const handleTodoClick = () => {
      onTodoClick(todo.id);
    };

    function statusDone(e: any) {
      if (!selectedTodo || selectedTodo.id !== todo.id) {
        dispatch(updateTodoStatus({ id: todo.id, status: e.target.checked }));
      }
      e.stopPropagation();
    }

    return (
      <>
        <tr onClick={handleTodoClick}>
          <td className="todoItem__row">{id}</td>
          <td className="todoItem__row">{titleValue}</td>
          <td className="todoItem__row">{descriptionValue}</td>
          <td className="todoItem__row" onClick={(e) => e.stopPropagation()}>
            <input
              type="checkbox"
              onChange={statusDone}
              checked={todo.status}
            />
          </td>
        </tr>
      </>
    );
  }
);
