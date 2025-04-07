//import { createContext, useEffect, useState } from "react";
//import { Todo } from "../lib/types";
//import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

import { createContext, useState } from 'react';
import { Todo, TodosContextType } from '../types';

export const TodosContext = createContext<TodosContextType | null>(null);

export default function TodosContextProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading] = useState(false);

  const addTodo = (content: string) => {
    setTodos([...todos, {
      id: Date.now().toString(),
      content,
      completed: false
    }]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const value = {
    todos,
    isLoading,
    totalCount: todos.length,
    completedCount: todos.filter(todo => todo.completed).length,
    addTodo,
    toggleTodo,
    deleteTodo
  };

  return (
    <TodosContext.Provider value={value}>
      {children}
    </TodosContext.Provider>
  );
}
// end from deepseek

