export type Category = 'Personal' | 'Study';

export interface Task {
  id: string;
  title: string;
  category: Category;
  completed: boolean;
  createdAt: string;
  emoji: string;
}

export interface CategoryConfig {
  name: Category;
  color: string;
  icon: string;
  bgColor: string;
  defaultEmoji: string;
}