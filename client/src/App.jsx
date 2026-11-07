import { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setIsLoading(true);

        // fetch todos from the server
        const response = await fetch("/api/todos");

        // check if the response is ok, if not throw an error
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }

        // parse the response as JSON
        const data = await response.json();

        // set the todos state with the fetched data
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    // call the fetchTodos function to fetch todos when the component mounts
    fetchTodos();
  }, []); // empty dependency array means this effect runs only once when the component mounts

  // render loading state, error state, and the list of todos
  if (isLoading) {
    return <div>Loading todos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div>
        <h1>Todo App</h1>
      </div>

      <div className="todo-list">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
