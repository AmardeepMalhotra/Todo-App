import React, { useEffect, useState } from "react";

export default function Input(props) {
  let [todo, setTodo] = useState("");
  const inputChange = (e) => {
    setTodo(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    if (props.editData.index === -1) {
      props.addTodo(todo);
    } else {
      props.updateTodo(todo, props.editData.index);
    }
    setTodo("");
  };

  useEffect(() => {
    setTodo(props.editData.data);
  }, [props.editData]);
  return (
    <div className="container mt-4">
      <form className="row g-3" onSubmit={submit}>
        <div className="col-10">
          <input
            type="text"
            className="form-control"
            id="inputPassword2"
            placeholder="Enter Todo"
            value={todo}
            onChange={inputChange}
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-primary mb-3"
            disabled={todo.length > 0 ? false : true}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
