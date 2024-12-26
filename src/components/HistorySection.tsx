import { HistoryTaskCard } from './HistoryTaskCard';
import { Task, CategoryConfig } from '../types';

interface HistorySectionProps {
  config: CategoryConfig;
  tasks: Task[];
}

export function HistorySection({ config, tasks }: HistorySectionProps) {
  return (
    <div className={`${config.bgColor} p-6 rounded-xl`}>
      <h2 className={`text-xl font-semibold ${config.color} mb-4`}>
        {config.name}
      </h2>
      <div className="space-y-3">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No completed tasks</p>
        ) : (
          tasks.map((task) => (
            <HistoryTaskCard key={task.id} task={task} />
          ))
        )}
      </div>
    </div>
  );
}