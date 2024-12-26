import { CategorySection } from './CategorySection';
import { HistorySection } from './HistorySection';
import { Task, CategoryConfig } from '../types';

interface TaskListProps {
  tasks: Task[];
  categories: CategoryConfig[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
  isHistory?: boolean;
}

export function TaskList({ tasks, categories, onToggleTask, onDeleteTask, isHistory = false }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <p className="text-gray-500 text-center">
        {isHistory ? 'No completed tasks yet' : 'No tasks yet'}
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {categories.map(category => (
        isHistory ? (
          <HistorySection
            key={category.name}
            config={category}
            tasks={tasks.filter(task => task.category === category.name)}
          />
        ) : (
          <CategorySection
            key={category.name}
            config={category}
            tasks={tasks.filter(task => task.category === category.name)}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        )
      ))}
    </div>
  );
}