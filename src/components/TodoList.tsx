import { useContext } from 'react';
import { TodosContext } from '../contexts/TodosContextProvider';
import { Todo } from '../types';
import DeleteButton from './DeleteButton';

export default function TodoList() {
  const { todos, toggleTodo } = useContext(TodosContext)!;

  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No todos yet!</p>
      ) : (
        <ul>
          {todos.map((todo: Todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className={todo.completed ? 'completed' : ''}>
                {todo.content}
              </span>
              <DeleteButton id={todo.id} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
