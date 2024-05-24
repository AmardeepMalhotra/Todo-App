import React, { useState } from "react";
import Input from "./Input";
import List from "./List";

export default function TodoList() {
  let [item, setItem] = useState([]);
  let [editData, setEditData] = useState({
    index: -1,
    data: "",
  });
  const addTodo = (value) => {
    setItem([...item, value]);
  };
  const todoItemDelete = (value) => {
    let filterItem = item.filter((data) => data !== value);
    setItem(filterItem);
  };

  const todoItemEdit = (item, index) => {
    setEditData({
      index: index,
      data: item,
    });
  };
  const updateTodo = (value, index) => {
    item.splice(index, 1, value);
    setEditData({
      index: -1,
      data: "",
    });
  };
  return (
    <>
      <Input addTodo={addTodo} editData={editData} updateTodo={updateTodo} />
      <List
        item={item}
        todoItemDelete={todoItemDelete}
        todoItemEdit={todoItemEdit}
      />
    </>
  );
}
