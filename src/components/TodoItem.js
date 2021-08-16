/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const TodoItem = (props) => (
  <li>
    <input
      type="checkbox"
      checked={props.todo.completed}
      onChange={() => props.handleChangeProps(props.todo.id)}
    />
    {props.todo.title}
    <button
      type="button"
      onClick={() => props.handleDelete(props.todo.id)}
    >
      Delete
    </button>
  </li>
);

export default TodoItem;
