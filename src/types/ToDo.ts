export enum TodoPriority {
  High = "High",
  Medium = "Medium",
  Low = "Low",
}

export interface typeTodo {
  id: string;
  todo: string;
  isCompleted: boolean;
  priority: TodoPriority;
}
