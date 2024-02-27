import React from 'react'
import ReactDOM from 'react-dom/client'
import { TaskList } from "./components/TaskList"
import "./styles.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskList  tasks={[
  { id: 1, text: 'Completar la tarea de matemáticas', completed: false },
  { id: 2, text: 'Hacer ejercicio', completed: true },
  { id: 3, text: 'Leer un libro', completed: false },
  { id: 4, text: 'Ir al supermercado', completed: false } ]} /> 
  </React.StrictMode>,
)
