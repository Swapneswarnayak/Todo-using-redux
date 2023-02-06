import React from "react";
import AddAction from "../ReduxStore/Action";
import { useDispatch } from "react-redux";
const Addtodo = () => {
  let dispatch = useDispatch();

  const handleAdd = () => {
    let task = document.getElementById("task").value;
    document.getElementById("task").value="";
    let priority = "low";
    let obj = {
      task: task,
      Priority: priority,
    };
    AddAction(obj, dispatch);
  };

  return (
    <div>
      <br />
      <input type="text" id="task" placeholder="Add Task here" />
      <br />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default Addtodo;
