import { useState } from "react";
import {
  useDraggable
} from "@dnd-kit/core";

function TaskCard({
  task,
  onDelete,
  onMove,
  onEdit
}) {
  const [editing, setEditing] =
    useState(false);

  const [editValue, setEditValue] =
    useState(task.title);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging
  } = useDraggable({
    id: task.id
  });

  const style = transform
    ? {
        transform:
          `translate3d(${transform.x}px, ${transform.y}px, 0)`
      }
    : undefined;

  function saveEdit() {
    const newTitle =
      editValue.trim();

    if (newTitle) {
      onEdit(task.id, newTitle);
    }

    setEditing(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      saveEdit();
    }

    if (event.key === "Escape") {
      setEditValue(task.title);
      setEditing(false);
    }
  }

  return (
    <article
      ref={setNodeRef}
      style={style}
      className={`task-card priority-${task.priority.toLowerCase()} ${
        isDragging ? "dragging" : ""
      }`}
    >

      <div className="drag-handle">
        <button
          className="drag-button"
          {...listeners}
          {...attributes}
          title="Drag task"
        >
          ⋮⋮
        </button>
      </div>

      <div className="task-content">

        <span
          className={`priority-badge ${task.priority.toLowerCase()}`}
        >
          {task.priority}
        </span>

        {editing ? (
          <input
            autoFocus
            className="edit-input"
            value={editValue}
            onChange={(event) =>
              setEditValue(event.target.value)
            }
            onBlur={saveEdit}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <h3>
            {task.title}
          </h3>
        )}

        <div className="task-actions">

          <button
            onClick={() => {
              setEditValue(task.title);
              setEditing(true);
            }}
          >
            Edit
          </button>

          {task.status !== "todo" && (
            <button
              onClick={() =>
                onMove(task.id, "todo")
              }
            >
              To Do
            </button>
          )}

          {task.status !== "in-progress" && (
            <button
              onClick={() =>
                onMove(task.id, "in-progress")
              }
            >
              Progress
            </button>
          )}

          {task.status !== "done" && (
            <button
              onClick={() =>
                onMove(task.id, "done")
              }
            >
              Done
            </button>
          )}

          <button
            className="delete-button"
            onClick={() =>
              onDelete(task.id)
            }
          >
            Delete
          </button>

        </div>

      </div>

    </article>
  );
}

export default TaskCard;