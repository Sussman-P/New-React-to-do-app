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
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
