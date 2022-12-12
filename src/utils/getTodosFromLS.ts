export const getTodosFromLS = () => {
	const data = localStorage.getItem('todos');
	const list = data ? JSON.parse(data) : [];
	return { list };
};

