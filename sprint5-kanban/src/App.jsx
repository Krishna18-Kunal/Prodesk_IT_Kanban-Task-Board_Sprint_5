import { useEffect, useState } from "react";
import { DndContext } from "@dnd-kit/core";

import AddTask from "./components/AddTask";
import SearchBar from "./components/SearchBar";
import Board from "./components/Board";

const initialTasks = [
  {
    id: crypto.randomUUID(),
    title: "Complete React assignment",
    priority: "High",
    status: "todo"
  },
  {
    id: crypto.randomUUID(),
    title: "Learn component props",
    priority: "Medium",
    status: "in-progress"
  },
  {
    id: crypto.randomUUID(),
    title: "Submit previous sprint",
    priority: "Low",
    status: "done"
  }
];

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("kanbanTasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : initialTasks;
  });

  const [search, setSearch] = useState("");

  /*
    Save board state whenever tasks change.
  */
  useEffect(() => {
    localStorage.setItem(
      "kanbanTasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  /*
    Add a new task.
  */
  function addTask(title, priority) {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      priority,
      status: "todo"
    };

    setTasks((previousTasks) => [
      ...previousTasks,
      newTask
    ]);
  }

  /*
    Delete task.
  */
  function deleteTask(taskId) {
    setTasks((previousTasks) =>
      previousTasks.filter(
        (task) => task.id !== taskId
      )
    );
  }

  /*
    Move task using buttons.
  */
  function moveTask(taskId, newStatus) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus
            }
          : task
      )
    );
  }

  /*
    Edit task title.
  */
  function editTask(taskId, newTitle) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              title: newTitle
            }
          : task
      )
    );
  }

  /*
    Drag and drop.
  */
  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id;

    const validStatuses = [
      "todo",
      "in-progress",
      "done"
    ];

    if (!validStatuses.includes(newStatus)) {
      return;
    }

    moveTask(taskId, newStatus);
  }

  /*
    Search filtering.
  */
  const filteredTasks = tasks.filter((task) =>
    task.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="app">

      <header className="header">

        <div>
          <div className="header-badge">
            SPRINT 05
          </div>

          <h1>
            Kanban Task Board
          </h1>

          <p>
            Manage your tasks with React state,
            priorities and drag-and-drop.
          </p>
        </div>

        <div className="task-counter">
          <strong>
            {tasks.length}
          </strong>

          <span>
            Total Tasks
          </span>
        </div>

      </header>

      <main className="container">

        <AddTask
          onAddTask={addTask}
        />

        <SearchBar
          search={search}
          onSearchChange={setSearch}
        />

        <DndContext
          onDragEnd={handleDragEnd}
        >
          <Board
            tasks={filteredTasks}
            onDelete={deleteTask}
            onMove={moveTask}
            onEdit={editTask}
          />
        </DndContext>

      </main>

    </div>
  );
}

export default App;