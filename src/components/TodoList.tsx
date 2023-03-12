import { useState } from "react";
import { useAppSelector } from "../api/hooks";
import { TodoTypes } from "../types/types";
import { TodoItem } from "./TodoItem";
import { Modal } from "./Modal/Modal";

interface TodoListProps {
  todos: TodoTypes[];
}

export const TodoList: React.FC<TodoListProps> = (props) => {
  const { todoList } = useAppSelector((state) => state.todolist);

  const [selectedTodo, setSelectedTodo] = useState<TodoTypes | null>(null);

  const handleTodoClick = (id: number) => {
    const todo = todoList.find((todo) => todo.id === id);
    if (todo) setSelectedTodo(todo);
  };

  const handleCloseModal = (e?: React.MouseEvent) => {
    if (e) {
      if (e.target === e.currentTarget) {
        setSelectedTodo(null);
      }

      e.stopPropagation();
    }
  };

  return (
    <>
      {todoList.length !== 0 && (
        <table className="todoTable">
          <thead>
            <tr>
              <th>ID</th>
              <th className="todoTable__title">TITLE</th>
              <th className="todoTable__description">DESCRIPTION</th>
              <th className="todoTable__status">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onTodoClick={handleTodoClick}
                selectedTodo={selectedTodo}
              />
            ))}
          </tbody>
        </table>
      )}
      <div onClick={handleCloseModal}>
        {selectedTodo && (
          <Modal onClose={handleCloseModal} todo={selectedTodo}></Modal>
        )}
      </div>
    </>
  );
};
