import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";
import "./App.css";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState([]);

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
