import { ITodosProps } from "../Todos/types";

export interface ITodoItemProps extends ITodosProps{
	removeTodo: (id: string) => void;
	toggleTodo: (id: string) => void;
	editTodo: (id: string) => void;
}