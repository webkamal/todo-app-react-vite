export interface Todo {
  id: string;
  content: string;
  completed: boolean;
}

export type TodosContextType = {
  todos: Todo[];
  isLoading: boolean;
  totalCount: number;
  completedCount: number;
  addTodo: (content: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};
