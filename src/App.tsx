import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <div className="app">
      <AddTodo />
      <TodoList todos={[]} />
    </div>
  );
};
