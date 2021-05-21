import React from "react";

export default function TodoItem({ todo , onDelete}) {
  return (
    <div className="border m-3 p-3 bg-glass-secondary2" >
      <h5>{todo.title}</h5>
      <h6>{todo.desc}</h6>
      <button className="btn btn-sm btn-danger mt-3" onClick={()=> {onDelete(todo)}}>Delete</button>
    </div>
  );
}
