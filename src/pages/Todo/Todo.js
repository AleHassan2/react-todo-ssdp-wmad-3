// import React, { useState } from "react";
// import { useTodoContext } from "contexts/TodoContext";
// import { message } from 'antd'

// const initialState = { title: "", location: "", date: "", description: "" };

// export default function Todo() {
//   const { saveTodoHandler } = useTodoContext();

//   const [state, setState] = useState(initialState);

//   const handleChange = (e) =>
//     setState((s) => ({ ...s, [e.target.name]: e.target.value }));

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let { title, location, date, description } = state;

//     const addTodo = {
//       title,
//       location,
//       date,
//       description,
//     };
//     saveTodoHandler(addTodo);
//     message.success("Your TODO Has Been Successfully Added")
//     setState(initialState);
//   };

//   return (
//     <>
//       <main>
//         <div className="container">
//           <div className="row">
//             <div className="col">
//               <div className="todo-container">
//                 <h2>New Todo</h2>
//                 <form className="todo-form" onSubmit={handleSubmit}>
//                   <label htmlFor="title">Title:</label>
//                   <input
//                     type="text"
//                     id="title"
//                     name="title"
//                     required
//                     value={state.title}
//                     onChange={handleChange}
//                   />

//                   <label htmlFor="location">Location:</label>
//                   <input
//                     type="text"
//                     id="location"
//                     name="location"
//                     value={state.location}
//                     onChange={handleChange}
//                   />

//                   <label htmlFor="date">Date:</label>
//                   <input
//                     type="date"
//                     id="date"
//                     name="date"
//                     value={state.date}
//                     onChange={handleChange}
//                   />

//                   <label htmlFor="description">Description:</label>
//                   <textarea
//                     id="description"
//                     name="description"
//                     rows="4"
//                     value={state.description}
//                     onChange={handleChange}
//                   ></textarea>

//                   <button type="submit">Add Todo</button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }
