import { useState } from "react";

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    onAddTask(trimmedTitle, priority);

    setTitle("");
    setPriority("Medium");
  }

  return (
    <section className="add-task-card">

      <div className="add-task-heading">
        <div className="add-icon">
          +
        </div>

        <div>
          <h2>
            Add New Task
          </h2>

          <p>
            Create a task and choose its priority.
          </p>
        </div>
      </div>

      <form
        className="add-task-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(event) =>
            setTitle(event.target.value)
          }
        />

        <select
          value={priority}
          onChange={(event) =>
            setPriority(event.target.value)
          }
        >
          <option value="High">
            High Priority
          </option>

          <option value="Medium">
            Medium Priority
          </option>

          <option value="Low">
            Low Priority
          </option>
        </select>

        <button type="submit">
          Add Task
        </button>

      </form>

    </section>
  );
}

export default AddTask;