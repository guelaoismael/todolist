import {  Sun } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 shadow-md">
    <div className="flex items-center gap-2">
        
        <span className="text-xl">TODO LIST</span>
      </div>
      <div>
      <Sun size={24} className="text-blue-500 hover:text-blue-800 cursor-pointer" />
      </div>
    </header>
  );
};
