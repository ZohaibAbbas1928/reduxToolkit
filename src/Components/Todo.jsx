import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {removeTodo} from '../features/Todo/todoSlice'

function Todo() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return <>
  
  {todos.map((todo) => (
    <li key={todo.id}>
      {todo.text}
      <button className="bg-gray-900 text-white rounded-xl w-20 h-10 ml-4 mt-4" onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
    </li>
  ))}
  </>;
}

export default Todo;
