import Column from "./Column";

function Board({
  tasks,
  onDelete,
  onMove,
  onEdit
}) {
  const columns = [
    {
      id: "todo",
      title: "To Do",
      description: "Tasks waiting to be started",
      icon: "📋"
    },
    {
      id: "in-progress",
      title: "In Progress",
      description: "Tasks currently being worked on",
      icon: "⚡"
    },
    {
      id: "done",
      title: "Done",
      description: "Completed tasks",
      icon: "✓"
    }
  ];

  return (
    <div className="board">
      {columns.map((column) => (
        <Column
          key={column.id}
          id={column.id}
          title={column.title}
          description={column.description}
          icon={column.icon}
          tasks={tasks.filter(
            (task) => task.status === column.id
          )}
          onDelete={onDelete}
          onMove={onMove}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default Board;