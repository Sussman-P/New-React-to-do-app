import express from "express";

const app = express();
const port = 3001;

let todos = [
  { id: 1, title: "Learn React", completed: false },
  { id: 2, title: "Build a Todo App", completed: false },
  { id: 3, title: "Deploy the App", completed: false },
];

app.use(express.json());

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.post("/api/todos", (req, res) => {
  // to build a new todo object with a fresh id. think about how to generate one. Date.now() is the simplest option.
  const newTodo = {
    id: Date.now(),
    title: req.body.title,
    completed: false,
  };

  // type check on title property to ensure it's a string and not empty
  if (typeof newTodo.title !== "string" || newTodo.title.trim() === "") {
    return res.status(400).json({ message: "Title must be a non-empty string" });
  }

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// patch request to update a todo item by id
app.patch("/api/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === todoId);

  // type check on completed property to ensure it's a boolean
  if (req.body.completed !== undefined && typeof req.body.completed !== "boolean") {
    return res.status(400).json({ message: "Completed must be a boolean" });
  }

  // add inline edit feature to update the title of a todo item must not be empty and must be a string
  if (req.body.title !== undefined) {
    if (typeof req.body.title !== "string" || req.body.title.trim() === "") {
      return res.status(400).json({ message: "Title must be a non-empty string" });
    }
    todo.title = req.body.title;
  }

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
  res.json(todo);
});

// delete request to remove a todo item by id
app.delete("/api/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const index = todos.findIndex((t) => t.id === todoId);

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todos.splice(index, 1);
  res.status(204).send();
});

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
