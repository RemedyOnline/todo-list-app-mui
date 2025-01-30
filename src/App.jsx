import { useEffect } from "react";
import { useState } from "react";
import TodoCard from "./components/TodoCard";
import TodoDetails from "./components/TodoDetails";

function App() {
	const [loading, setLoading] = useState(false);
	const [todoData, setTodoData] = useState([]);
	const [errorMsg, setErrorMsg] = useState("");
	const [todoDetails, setTodoDetails] = useState(null);
	const [openModal, setOpenModal] = useState(false);

	async function fetchTodos() {
		try {
			setLoading(true);
			const apiResponse = await fetch("https://dummyjson.com/todos");
			const result = await apiResponse.json();
			console.log("Todo List:", ...result.todos);
			if (result?.todos && result?.todos?.length > 0) {
				setTodoData(result?.todos);
				setLoading(false);
				setErrorMsg("");
			} else {
				setTodoData([]);
				setErrorMsg("No data found...");
			}
		} catch (error) {
			console.log(error);
			setErrorMsg("An error occured oo charleyy...");
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchTodos();
	}, []);

	async function getTodoDetails(currentTodo) {
		try {
			const apiTodoDetail = await fetch(
				`https://dummyjson.com/todos/${currentTodo}`
			);
			const details = await apiTodoDetail.json();
			if (details) {
				setTodoDetails(details);
				console.log("Todo Details", details);
				setOpenModal(true);
			} else {
				setTodoDetails(null);
				setOpenModal(false);
			}
		} catch (error) {
			console.log(error);
		}
	}

	console.log(errorMsg);

	if (loading) return <p>Fetching data... please wait!</p>;

	return (
		<>
			<div>
				<h1 className="italic text-3xl text-center underline font-bold my-4">
					Remedic Todo App
				</h1>
				<div className="m-5 gap-3 flex flex-wrap">
					{todoData && todoData.length > 0 ? (
						todoData.map((todoItem) => (
							<TodoCard
								key={todoItem.id}
								id={todoItem.id}
								todo={todoItem.todo}
								completed={todoItem.completed}
								getTodoDetails={getTodoDetails}
							/>
						))
					) : (
						<p>{loading}</p>
					)}
				</div>
				<TodoDetails
					openModal={openModal}
					todoDetails={todoDetails}
					setOpenModal={setOpenModal}
					setTodoDetails={setTodoDetails}
				/>
			</div>
		</>
	);
}

export default App;
