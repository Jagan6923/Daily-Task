import { History } from "lucide-react";

interface HeaderProps {
  showHistory: boolean;
  onToggleHistory: () => void;
  onAddTask: () => void;
}

export function Header({
  showHistory,
  onToggleHistory,
  onAddTask,
}: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-gray-100">Student Task Manager</h1>
      <div className="flex gap-4">
        <button
          onClick={onToggleHistory}
          className="flex items-center gap-2 px-2 py-1 bg-gray-300 rounded-lg hover:bg-gray-300 transition-colors"
        >
          <History className="h-5 w-5" />
          {showHistory ? "Show Tasks" : "Show History"}
        </button>
        <button
          onClick={onAddTask}
          className="px-4 py-2 bg-[#9248c0] text-white rounded-lg hover:bg-[#682999] transition-colors"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
