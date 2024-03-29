import React, { useState, useEffect } from "react";
import { useTodoContext } from "contexts/TodoContext";
import { message } from "antd";

const initialState = { title: "", location: "", date: "", description: "" };

export default function Home() {
  const { todo } = useTodoContext();
  const [allTodo, setAllTodo] = useState([]);

  useEffect(() => {
    setAllTodo(todo);
  }, [todo]);

  const { saveTodoHandler, deleteTodo, updateTodo } = useTodoContext();

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const [state, setState] = useState(initialState);
  const [editState, setEditState] = useState(initialState);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleEditChange = (e) =>
    setEditState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    let { title, location, date, description } = state;
    const id = Math.floor(Math.random() * 10000 + 1);
    const addTodo = {
      title,
      location,
      date,
      description,
      id,
    };
    saveTodoHandler(addTodo);
    message.success("Your todo has been successfully added");
    setState(initialState);
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    let { title, location, date, description } = editState;
    const editTodo = {
      title,
      location,
      date,
      description,
      id: editId,
    };
    updateTodo(editId, editTodo);
    message.success("Your todo has been successfully added");
    setState(initialState);
  };

  const handleEdit = (id) => {
    setEditId(id);
    setEditState(allTodo.find((item) => item.id === id));
  };

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="mt-4 mb-4 text-center">All Todos </h1>

            <div id="float">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
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
                {allTodo.map((todo, i) => {
                  return (
                    <tr key={todo?.id}>
                      <th>{i + 1}</th>
                      <td>{todo.title}</td>
                      <td>{todo.location}</td>
                      <td>{todo.date}</td>
                      <td>{todo.description}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(todo.id)}
                        >
                          Delete
                        </button>
                        <span style={{ margin: "0 5px" }}></span>
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#editModal"
                          onClick={() => handleEdit(todo.id)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <main>
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="todo-container">
                        <h2>Add Todo</h2>
                        <form className="todo-form" onSubmit={handleSubmit}>
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

                          <button type="submit" data-bs-dismiss="modal">
                            Add Todo
                          </button>
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

      {/* Edit Modal */}
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <main>
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="todo-container">
                        <h2>Update Todo</h2>
                        <form className="todo-form" onSubmit={handleSubmitEdit}>
                          <label htmlFor="title">Title:</label>
                          <input
                            type="text"
                            id="title"
                            name="title"
                            required
                            value={editState.title}
                            onChange={handleEditChange}
                          />

                          <label htmlFor="location">Location:</label>
                          <input
                            type="text"
                            id="location"
                            name="location"
                            value={editState.location}
                            onChange={handleEditChange}
                          />

                          <label htmlFor="date">Date:</label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={editState.date}
                            onChange={handleEditChange}
                          />

                          <label htmlFor="description">Description:</label>
                          <textarea
                            id="description"
                            name="description"
                            rows="4"
                            value={editState.description}
                            onChange={handleEditChange}
                          ></textarea>

                          <button type="submit" data-bs-dismiss="modal">
                            Update Todo
                          </button>
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
