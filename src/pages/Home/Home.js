import React, { useState, useEffect } from "react";
import { useTodoContext } from "contexts/TodoContext";
import { message } from 'antd';


const initialState = { title: "", location: "", date: "", description: "" };

export default function Home() {
  const { todo } = useTodoContext();
  const [allTodo, setAllTodo] = useState([]);
  useEffect(() => {
    setAllTodo(todo);
    console.log(todo, 'testing')
  }, [todo]);
  console.log("allTodo", allTodo)

  const { saveTodoHandler, deleteTodo } = useTodoContext();

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const [state, setState] = useState(initialState);

  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    let { title, location, date, description } = state;
    const id = Math.floor(Math.random() * 10000 + 1);
    const addTodo = {
      title,
      location,
      date,
      description,
      id
    };
    saveTodoHandler(addTodo);
    message.success("Your TODO Has Been Successfully Added")
    setState(initialState);

  };



  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="mt-4 mb-4 text-center">All Todos </h1>


            <div id="float" >
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal">
              Add todo
            </button>
            </div>


          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allTodo.map((user, i) => {
                  return <tr>
                    <th>{i + 1}</th>
                    <td>{user.title}</td>
                    <td>{user.location}</td>
                    <td>{user.date}</td>
                    <td>{user.description}</td>
                    <td><button className="btn btn-success" onClick={() => handleDelete(user.id)} >Delete </button></td>
                  </tr>;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>


      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Todo </h1> */}
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <main>
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="todo-container">
                        <h2>New Todo</h2>
                        <form className="todo-form"
                          onSubmit={handleSubmit}
                        >
                          <label htmlFor="title">Title:</label>
                          <input
                            type="text"
                            id="title"
                            name="title"
                            required
                            value={state.title}
                            onChange={handleChange}
                          />

                          <label htmlFor="location">Location:</label>
                          <input
                            type="text"
                            id="location"
                            name="location"
                            value={state.location}
                            onChange={handleChange}
                          />

                          <label htmlFor="date">Date:</label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={state.date}
                            onChange={handleChange}
                          />

                          <label htmlFor="description">Description:</label>
                          <textarea
                            id="description"
                            name="description"
                            rows="4"
                            value={state.description}
                            onChange={handleChange}
                          ></textarea>

                          <button  type="submit">Add Todo</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
