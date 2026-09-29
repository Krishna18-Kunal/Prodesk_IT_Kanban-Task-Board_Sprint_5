import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";

function Column({
  id,
  title,
  description,
  icon,
  tasks,
  onDelete,
  onMove,
  onEdit
}) {
  const { setNodeRef, isOver } = useDroppable({
    id
  });

  return (
    <section
      ref={setNodeRef}
      className={`kanban-column ${isOver ? "column-over" : ""}`}
    >
      <div className="column-header">
        <div className="column-title">
          <span className="column-icon">{icon}</span>

          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>

        <span className="task-count">
          {tasks.length}
        </span>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <div className="empty-column">
            No tasks here
          </div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={onDelete}
              onMove={onMove}
              onEdit={onEdit}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default Column;