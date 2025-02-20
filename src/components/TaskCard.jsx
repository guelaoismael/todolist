import { Delete, Pencil, Trash2 } from "lucide-react";

export const TaskCard = ({ task }) => {
  return (
    <div
      className={`bg-white rounded-md p-2 border ${
        task.completed
          ? "border-gray-200 shadow-md shadow-green-300"
          : "border-gray-200 shadow-md shadow-red-300"
      }`}
    >
      <div>
        <p className="flex justify-between ">
          <span className="text-2xl font-medium">{task.name}</span>
          <span>
            <span className="flex gap-2">
              <Pencil
                size={20}
                className="text-green-950 hover:text-blue-800 cursor-pointer"
              />
              <Trash2
                size={20}
                className="text-red-500 hover:text-blue-800 cursor-pointer"
              />
            </span>
          </span>
        </p>

        <p className="text-md font-light text-gray-500">{task.time}</p>
        <span className="text-sm font-normal text-gray-500 mr-1">
          Priorité -
        </span>
        <span className="text-sm font-normal text-red-500">
          {task.priority}
        </span>
      </div>
    </div>
  );
};
