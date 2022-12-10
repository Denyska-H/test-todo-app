import { ITodosProps } from "../Todos/types";

export interface ITodoListProps {
	items: ITodosProps[];
	removeTodo: (id: string) => void;
	toggleTodo: (id: string) => void;
	editTodo: (id: string) => void;
}