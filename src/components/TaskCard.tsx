import { Task } from "../types";
import { format } from "date-fns";
import { Trash2, Check } from "lucide-react";

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  const isOverdue =
    !task.completed &&
    new Date(task.createdAt) < new Date(Date.now() - 24 * 60 * 60 * 1000);

  return (
    <div
      className={`p-5 rounded-lg shadow-sm transition-all ${
        isOverdue
          ? "bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500"
          : "bg-white dark:bg-gray-800"
      }`}
    >
      <div className="flex items-center gap-3">
        {/* Checkbox */}
        <button
          onClick={() => onToggle(task.id)}
          className={`h-5 w-5 rounded-full flex items-center justify-center border-2 transition-colors ${
            task.completed
              ? "bg-green-500 border-green-500"
              : "border-gray-300 hover:border-green-500"
          }`}
        >
          {task.completed && <Check className="h-3 w-3 text-white" />}
        </button>

        {/* Emoji and Task Title */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-lg">{task.emoji}</span>
            <span
              className={`text-gray-800 dark:text-gray-200 font-medium ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.title}
            </span>
          </div>

          {/* Task creation date */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Created: {format(new Date(task.createdAt), "MMM d, yyyy")}
          </p>
        </div>

        {/* Delete button */}
        <button
          onClick={() => onDelete(task.id)}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
