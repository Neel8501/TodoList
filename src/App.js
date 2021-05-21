import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log({ todo }, " Deleted..");
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("adding item: ", title, desc);
    let id;
    if (todos.length === 0) {
      id = 0;
    } else {
      id = todos[todos.length - 1].id + 1;
    }

    const myTodo = {
      id: id,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
    console.log(myTodo);

  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <Router>
      <Header title="Todos List" searchBar={false} />
      <Switch>
        <Route exact path="/">
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
          <Footer />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
