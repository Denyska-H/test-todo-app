export type Todo = {
  id: string;
  value: string;
  completed: boolean;
}

export type TodosState = {
  list: Todo[];
	value: string;
	id: string;
	toggleSubmit: boolean;
}