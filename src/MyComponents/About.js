import React from "react";

export default function About() {
  return (
    <div className="alert m-5 p-5 bg-glass-secondary" role="alert">
      <h4 className="alert-heading">About Todos List App</h4>
      <p>
        Created to learn React Js. &nbsp;
        <a href="https://github.com/Neel8501" target="_blank">
          Check More Projects
        </a>
      </p>
      <p>
        <strong>Email: </strong>
        <a href="mailto:neelp8501@gmail.com">neelp8501@gmail.com</a>
      </p>
      <hr />
      <p className="mb-0">Feel free to ask questions and give suggestions.</p>
    </div>
  );
}
