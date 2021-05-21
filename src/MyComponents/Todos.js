import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {
  return (
    <div style={{minHeight:'35vh'}}>
      {props.todos.length === 0 ? (
        <div className="p-3">No todos to display</div>
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete} />
          );
        })
      )}
    </div>
  );
}
