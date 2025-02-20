import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { TaskList } from './components/TaskList'
import './App.css'
import { useState } from 'react'

function App() {

  const [taskList, setTaskList] = useState([
    
  ])

  return (
    <>
    <Header />
    <AddTask taskList={taskList}  setTaskList={setTaskList}/>
    <TaskList taskList={taskList}  setTaskList={setTaskList}/>
    </>
  )
}

export default App
