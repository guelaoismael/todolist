import { Delete, Pencil, Trash2 } from "lucide-react";

export const TaskCard = ({ tsk, taskList, setTaskList, task, setTask }) => {

  const handleEdit = (id) => {
    const selectedTask = taskList.find(t => t.id === id)

    setTask(selectedTask)
  }

  const handleDelete = (id) => {
    const updateTaskList = taskList.filter(t => t.id !== id)
    
    setTaskList(updateTaskList)
  }
  
  return (
    <div
      className={`bg-white rounded-md p-2 border ${
        tsk.completed
          ? "border-gray-200 shadow-md shadow-green-300"
          : "border-gray-200 shadow-md shadow-red-300"
      }`}
    >
      <div>
        <p className="flex justify-between ">
          <span className="text-2xl font-medium">{tsk.name}</span>
          <span>
            <span className="flex gap-2">
              <Pencil
                size={20}
                onClick={()=>handleEdit(tsk.id)}
                className="text-green-950 hover:text-blue-800 cursor-pointer"
              />
              <Trash2
                size={20}
                onClick={()=>handleDelete(tsk.id)}
                className="text-red-500 hover:text-blue-800 cursor-pointer"
              />
            </span>
          </span>
        </p>

        <p className="text-md font-light text-gray-500">{tsk.time}</p>
        <span className="text-sm font-normal text-gray-500 mr-1">
          Priorité -
        </span>
        <span className="text-sm font-normal text-red-500">
          {tsk.priority}
        </span>
      </div>
    </div>
  );
};
