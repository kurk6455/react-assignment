import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  //States
  const [todos, setTodos] = useState(
    [
      { id: 1, text: "Learn React", completed: false },
      { id: 2, text: "Build a Todo App", completed: true }
    ]
  );
  const [filter, setFilter] = useState("All");

  //disply todo in console
  useEffect(() => {
    console.log(todos);
  }, [todos])
  useEffect(() => {
    console.log(filter);
  }, [filter])


  //CRUD operation
  const addTodo = (todoText) => {
    if (todoText === "") {
      alert("Empty todo");
      return;
    }

    const todo = {
      id: Date.now(),
      text: todoText,
      completed: false
    }
    setTodos([...todos, todo]);
  }

  const toggleTodo = (id) => {
    const newTodo = todos.map(todo => {
      if (todo.id === id) {
        return {
          id: todo.id,
          text: todo.text,
          completed: !todo.completed
        }
      }

      return todo;
    })
    setTodos(newTodo);
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg'>
      <TodoInput addTodo={addTodo} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TodoList todos={todos} filter={filter} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  )
}



const TodoInput = (props) => {
  const inputRef = useRef();

  return (
    <>
      <input type="text" placeholder='enter your todo....' ref={inputRef} className='border rounded-lg px-3 py-2 w-full focus:ring' />
      <button onClick={() => { props.addTodo(inputRef.current.value); inputRef.current.value = "" }} className='bg-blue-500 text-white px-3 py-2 rounded-lg my-2 w-full hover:bg-blue-600'>Add Todo</button>
      <br /> <br />
    </>
  )
}


const FilterButtons = (props) => {
  

  return (
    <div className='w-full flex justify-center items-center'>
      <button onClick={() => props.setFilter("All")} className={props.filter === "All" ? "bg-green-300 text-gray-700 px-3 py-2 " : "bg-gray-200 text-gray-700 px-3 py-2 "}>All</button>
      <button onClick={() => props.setFilter("Active")} className={props.filter === "Active" ? "bg-green-300 text-gray-700 px-3 py-2 " : "bg-gray-200 text-gray-700 px-3 py-2 "}>Active</button>
      <button onClick={() => props.setFilter("Completed")} className={props.filter === "Completed" ? "bg-green-300 text-gray-700 px-3 py-2 " : "bg-gray-200 text-gray-700 px-3 py-2 "}>Completed</button>
      <br />
    </div>
  )
}

const TodoList = (props) => {
  let todoList = props.todos;

  if (props.filter === "Active") {
    todoList = todoList.filter(todo => todo.completed === false)
  } else if (props.filter === "Completed") {
    todoList = todoList.filter(todo => todo.completed === true)
  }

  todoList = todoList.map(todo => {
    return <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} filter={props.filter} toggleTodo={props.toggleTodo} deleteTodo={props.deleteTodo} />
  })

  return (
    <>
      {todoList}
    </>
  )
}

const TodoItem = (props) => {

  return (
    <div className='border-b'>
      <div className='flex items-center justify-between py-2 px-3 my-5 '>
        <input type="checkbox" checked={props.completed} onChange={() => props.toggleTodo(props.id)} />
        {props.completed ? <div className='line-through text-gray-400'>{props.text}</div> : <div className='text-gray-800'>{props.text}</div>}
        <button onClick={() => props.deleteTodo(props.id)} className='bg-red-500 text-white rounded px-2'>delete</button>
      </div>
      {/* Future Upgrade */}
      {/* <div className='flex justify-center items-center'>
        <input type="text" placeholder={props.text} className='border rounded-lg px-3 py-2 mx-2 my-4 w-<90%> focus:ring' />
        <button className='bg-green-500 text-white rounded px-2'>Update</button>
      </div> */}
    </div>
  )
}

export default App
