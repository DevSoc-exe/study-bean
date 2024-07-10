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

export const todoPriorityColorCode = {
  [TodoPriority.High]: "bg-red-100",
  [TodoPriority.Medium]: "bg-orange-100",
  [TodoPriority.Low]: "bg-yellow-100",
};
