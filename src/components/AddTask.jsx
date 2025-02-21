export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (task.id) {
      const date = new Date();
      const updateTaskList = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
              name: task.name,
              completed: false,
              priority: "élévé",
            }
          : todo
      );
      setTaskList(updateTaskList);
      setTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
        name: event.target.task.value,
        completed: true,
        priority: "élévé",
      };

      setTaskList([...taskList, newTask]);
     
      setTask({});
    }
  };

  return (
    <div className="mt-8 grid  place-items-center">
      <div className=" p-6 w-180 ">
        <form onSubmit={handleSubmit}>
          <div className=" mt-2 ">
            <div className="flex gap-x-4">
              <div className=" flex flex-grow items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-600">
                <input
                  placeholder="Add task"
                  type="text"
                  name="task"
                  value={task.name || ""}
                  onChange={e => setTask({...task, name:e.target.value})}
                  autoComplete="off"
                  maxLength="30"
                  className="  min-w-0 flex-auto py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
              <button className="flex-none rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700">
                {task.id ? "Modifier" : "Ajouter" } 
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
