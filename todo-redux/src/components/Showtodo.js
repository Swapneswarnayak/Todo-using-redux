import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MyStore from "../ReduxStore/ReduxStore";

const Showtodo = () => {
  let data = useSelector((store) => {
    return store.TodoList;
  });
  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div>ShowTodo</div>;
};

export default Showtodo;
