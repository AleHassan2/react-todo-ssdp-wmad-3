import React, { useState, createContext, useContext, useEffect } from "react";

const TodoContext = createContext();

export default function TodoContextProvider({ children }) {
  const [todo, setTodo] = useState([]);

  const saveTodoHandler = (newTodo) => {
    setTodo((previousTodo) => [...previousTodo, newTodo]);
  };

  const deleteTodo = (id) => {
    const newTodos = todo.filter((todo) => todo.id !== id);
    setTodo(newTodos);
  };

  const updateTodo = (id, data) => {
    const index = todo.findIndex((todo) => todo.id === id);
    if (index > -1) {
      todo[index].title = data?.title;
      todo[index].description = data?.description;
      todo[index].location = data?.location;
      todo[index].date = data?.date;
    }
    setTodo([...todo]);
  };

  return (
    <TodoContext.Provider
      value={{ saveTodoHandler, todo, deleteTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export const useTodoContext = () => useContext(TodoContext);
