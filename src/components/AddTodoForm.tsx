import { useState, useContext } from 'react';
import { TodosContext } from '../contexts/TodosContextProvider';
import Button from './Button';

export default function AddTodoForm() {
  const [content, setContent] = useState('');
  const { addTodo } = useContext(TodosContext)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      addTodo(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Add new todo..."
      />
      <Button buttonType="submit" onClick={() => {}}>
        Add Todo
      </Button>
    </form>
  );
}
