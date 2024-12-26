import { useState } from "react";
import { AddTaskModal } from "./components/AddTaskModal";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { CATEGORIES, QUOTES } from "./utils/constants";
import { Task, Category } from "./types";

export default function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  // Filter active tasks (tasks that are not completed or are recent)
  const activeTasks = tasks.filter(
    (task) =>
      !task.completed ||
      new Date(task.createdAt).getTime() > Date.now() - 24 * 60 * 60 * 1000
  );

  // Filter completed tasks for history view
  const historyTasks = tasks.filter((task) => task.completed);

  // Handle adding a new task
  const handleAddTask = (title: string, category: Category, emoji: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      category,
      completed: false,
      createdAt: new Date().toISOString(),
      emoji,
    };
    setTasks([...tasks, newTask]);
  };

  // Handle toggling task completion
  const handleToggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Handle deleting a task
  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Randomly select a quote
  const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];

  return (
    <div className="min-h-screen bg-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Component */}
        <Header
          showHistory={showHistory}
          onToggleHistory={() => setShowHistory(!showHistory)}
          onAddTask={() => setShowAddModal(true)}
        />

        {/* Display random quote */}
        <div className="mb-6 text-gray-300 italic">
          <p>"{randomQuote}"</p>
        </div>

        {/* Display tasks based on history or active task view */}
        {showHistory ? (
          <>
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">
              Completed Tasks History
            </h2>
            <TaskList
              tasks={historyTasks}
              categories={CATEGORIES}
              onToggleTask={handleToggleTask}
              onDeleteTask={handleDeleteTask}
              isHistory
            />
          </>
        ) : (
          <TaskList
            tasks={activeTasks}
            categories={CATEGORIES}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
          />
        )}

        {/* AddTaskModal component */}
        <AddTaskModal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          onAdd={handleAddTask}
          categories={CATEGORIES}
        />
      </div>
    </div>
  );
}
