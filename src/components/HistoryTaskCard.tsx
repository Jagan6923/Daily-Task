import { Task } from '../types';
import { format } from 'date-fns';

interface HistoryTaskCardProps {
  task: Task;
}

export function HistoryTaskCard({ task }: HistoryTaskCardProps) {
  return (
    <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-xl">{task.emoji}</span>
        <span className="flex-1 text-white">{task.title}</span>
      </div>
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Completed: {format(new Date(task.createdAt), 'MMM d, yyyy')}
      </div>
    </div>
  );
}