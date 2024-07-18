export interface Task {
  id: number;
  title: string;
  category: string;
  date: Date;
  completed: boolean;
  new: boolean;
}

export interface NewTask {
  title: string;
  category: string;
  date: Date;
}

export interface TaskToUpdate {
  id: number;
  completed: boolean;
  new: boolean;
}
