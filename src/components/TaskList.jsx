import { TaskCard } from "./TaskCard";


export const TaskList = () => {
    const tasks = [
        {
            id:1020,
            name:"Manger",
            time: "12 janvier 2023 à 13h45min",
            priority:"Elevé",
            completed: false,
        },
        {
            id:1021,
            name:"Se reposer",
            time: "12 janvier 2023 à 13h45min",
            priority:"Moyen",
            completed: false,
        },
        {
            id:1020,
            name:"Sport",
            time: "12 janvier 2023 à 13h45min",
            priority:"Moyen",
            completed: true,
        },

    ];
  return (
    <div className="mt-8 shadow-md p-4 bg-gray-50/2">
      <div className="flex justify-between">
        <div>
          <span className="text-2xl font-bold">Todolist</span>
          <span className="ml-4 bg-black px-2 py-1  rounded-sm">
            <span className="text-white">{tasks.length}</span>
          </span>
        </div>
        <div>
          <button className="flex-none rounded-md bg-red-500 p-1.5 text-sm font-semibold text-white shadow-xs hover:bg-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">
            Tout Supprimer
          </button>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        {tasks.map((task)=> (
            <TaskCard task={task} />
        ))}
        
      </div>
    </div>
  );
};
