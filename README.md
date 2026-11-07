# 📝 Todo App

> A full-stack to-do app, built as a comeback tour for my JavaScript skills.

React on the front, Express on the back, and a lot of `console.log` in between.

<!-- Add a screenshot once the UI looks decent, e.g. ![App screenshot](./docs/screenshot.png) -->

## ✨ What it does

- Shows your todos, fetched live from the Express API
- Add, complete, edit and delete todos *(API is done; UI is in progress, see the roadmap)*
- Validates input on the server, so blank todos can't sneak in

## 🧰 Tech stack

| Layer | Tools |
|---|---|
| Frontend | React, Vite |
| Backend | Node.js 26, Express 5 |
| Database | PostgreSQL *(planned, todos live in memory for now)* |
| Dev tooling | nodemon, Thunder Client |

## 🚀 Run it locally

You'll need [nvm](https://github.com/nvm-sh/nvm) or Node 26.

```bash
git clone https://github.com/Sussman-P/New-React-to-do-app.git
cd New-React-to-do-app
nvm use
```

**Start the API** (http://localhost:3001):

```bash
cd server
npm install
npm run dev
```

**Start the client** (http://localhost:5173) in a second terminal:

```bash
cd client
npm install
npm run dev
```

Vite proxies `/api` requests to the Express server, so there are no CORS headaches.

## 🔌 API

| Method | Route | What it does | Success |
|---|---|---|---|
| GET | `/api/todos` | List all todos | 200 |
| POST | `/api/todos` | Create a todo (`{ "title": "..." }`) | 201 |
| PATCH | `/api/todos/:id` | Update `title` and/or `completed` | 200 |
| DELETE | `/api/todos/:id` | Remove a todo | 204 |

Errors come back as `{ "message": "..." }` with a 400 (bad input) or 404 (unknown id).

> Heads up: todos are stored in memory, so restarting the server resets them. That changes in the persistence step below.

## 🗺️ Roadmap

- [x] Express API with full CRUD and validation
- [x] React client scaffolded with a Vite proxy
- [x] Display todos from the API
- [ ] Add todos from the UI
- [ ] Toggle complete and delete from the UI
- [ ] Inline editing
- [ ] Persist todos with PostgreSQL
- [ ] Filters: All / Active / Completed
- [ ] Styling and a proper screenshot

## 🧠 What I'm practicing

Refreshing my React and Express fundamentals: REST design, status codes, controlled components, immutable state updates, and `fetch` with `async`/`await`. I'm writing this one by hand, bugs included.

## 📓 Dev log

- **Day 1:** project setup, Express API, and a very satisfying `204 No Content`.
- **Day 2:** React client and the proxy. First todos on screen.
