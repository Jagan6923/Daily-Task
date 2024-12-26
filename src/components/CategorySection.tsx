import { TaskCard } from './TaskCard';
import { Task, CategoryConfig } from '../types';

interface CategorySectionProps {
  config: CategoryConfig;
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function CategorySection({ config, tasks, onToggleTask, onDeleteTask }: CategorySectionProps) {
  return (
    <div className={`${config.bgColor} p-6 rounded-xl`}>
      <h2 className={`text-xl font-semibold ${config.color} mb-4`}>
        {config.name}
      </h2>
      <div className="space-y-3">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks yet</p>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={onToggleTask}
              onDelete={onDeleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
}