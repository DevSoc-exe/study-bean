export enum TodoPriority {
  High = "High",
  Medium = "Medium",
  Low = "Low",
}

export interface typeTodo {
  id: string;
  todo_body: string;
  isCompleted: boolean;
  priority: TodoPriority;
}
