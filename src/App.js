import { useEffect, useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((rawTodosData) => rawTodosData.json())
			.then((todosData) => setTodos(todosData));
	}, []);

	return (
		<div className={styles.App}>
			{todos.map(({ id, title }) => (
				<div className={styles.todo} key={id}>
					{title}
				</div>
			))}
		</div>
	);
};
