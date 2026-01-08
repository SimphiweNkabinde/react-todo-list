export default function TodoItem({
  id,
  title,
  completed,
  deleteItem,
  toggleItem,
}) {
  return (
    <li key={id} className="form-check d-flex gap-2 align-items-center">
      <input
        id={id}
        type="checkbox"
        checked={completed}
        className="form-check-input"
        onChange={(e) => toggleItem(id, e.target.checked)}
      />
      <label htmlFor="list-item-1" className="form-check-label fs-4">
        {title}
      </label>
      <button
        onClick={() => deleteItem(id)}
        className="btn btn-sm btn-outline-danger"
      >
        Delete
      </button>
    </li>
  );
}
