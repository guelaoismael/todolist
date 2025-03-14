import { TaskCard } from "./TaskCard";

export const TaskList = ({ taskList, setTaskList, task, setTask }) => {
  const clearAll = () => {
    setTaskList([]);
  };
  return (
    <div className="mt-8 shadow-md p-4 bg-gray-50/2">
      <div className="flex justify-between">
        <div>
          <span className="text-2xl font-bold">Todolist</span>
          <span className="ml-4 bg-black px-2 py-1  rounded-sm">
            <span className="text-white">{taskList.length}</span>
          </span>
        </div>
        <div>
          <button
            onClick={clearAll}
            className="flex-none rounded-md bg-red-700 p-1.5 text-sm font-semibold text-white shadow-xs hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
          >
            Tout Supprimer
          </button>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        {taskList.map((tsk) => (
          <TaskCard
            key={tsk.id}
            tsk={tsk}
            taskList={taskList}
            setTaskList={setTaskList}
            task={task}
            setTask={setTask}
          />
        ))}
      </div>
    </div>
  );
};
