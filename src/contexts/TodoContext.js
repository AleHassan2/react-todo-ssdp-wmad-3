import React, { useState, createContext, useContext, useEffect } from "react";

const TodoContext = createContext();



export default function TodoContextProvider({ children }) {
  const [todo, setTodo] = useState([]);

  const saveTodoHandler = (newTodo) => {
   
    setTodo((previousTodo) => [...previousTodo, newTodo]);
  };

  const deleteTodo = (id) => {
    console.log(id, 'id')
    const newTodos = todo.filter((todo) => todo.id !== id);
    console.log(newTodos, 'newTodos')
    setTodo(newTodos);
  };



  return (
    <TodoContext.Provider
      value={{ saveTodoHandler, todo , deleteTodo  }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export const useTodoContext = () => useContext(TodoContext);
