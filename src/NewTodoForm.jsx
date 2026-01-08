import React, { useState } from "react";

export default function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form mb-5">
      <div className="form-row mb-3">
        <label className="d-block fs-3" htmlFor="item">
          New Item
        </label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          className="form-control bg-primary-subtle"
          id="item"
        />
      </div>
      <button className="btn btn-outline-primary w-100">Add</button>
    </form>
  );
}
