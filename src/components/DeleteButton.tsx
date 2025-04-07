import { useContext } from 'react';
import { TodosContext } from '../contexts/TodosContextProvider';

interface DeleteButtonProps {
  id: string;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  const { deleteTodo } = useContext(TodosContext)!;

  return (
    <button 
      className="delete-button"
      onClick={() => deleteTodo(id)}
      aria-label="Delete todo"
    >
      ×
    </button>
  );
}
