import React from "react";

export default function List(props) {
  const deleteTodo = (data) => {
    props.todoItemDelete(data);
  };
  const editTodo = (todo, index) => {
    props.todoItemEdit(todo, index);
  };

  return (
    <div className="container mt-4 my-4">
      <ul className="list-group">
        {props.item.length > 0 ? (
          props.item.map((todo, index) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={index}
            >
              {todo}
              <div>
                <button
                  className="btn btn-warning me-2 "
                  onClick={() => editTodo(todo, index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item">No Todo</li>
        )}
      </ul>
    </div>
  );
}
