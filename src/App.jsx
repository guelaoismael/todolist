import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task, setTask] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList))
  
  }, [taskList])
  

  return (
    <>
      <Header />
      <AddTask 
      taskList={taskList} 
      setTaskList={setTaskList}
      task={task}
      setTask={setTask} 
      />
      <TaskList 
      taskList={taskList}
      setTaskList={setTaskList} 
      task={task}
      setTask={setTask} 
      />
    </>
  );
}

export default App;
