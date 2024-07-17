export interface Task {
  id: number;
  title: string;
  category: string;
  date: Date;
  completed: boolean;
  new: boolean;
}
