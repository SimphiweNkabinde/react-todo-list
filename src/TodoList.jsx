import TodoItem from "./TodoItem";

export default function TodoList({ items, onDelete, onToggle }) {
  return (
    <ul className="list-unstyled">
      {items.length === 0 && "No Todos"}
      {items.map((todo) => (
        <TodoItem {...todo} deleteItem={onDelete} toggleItem={onToggle} key={todo.id} />
      ))}
    </ul>
  );
}
