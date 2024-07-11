export enum TodoPriority {
  High = "High",
  Medium = "Medium",
  Low = "Low",
}


export const todoPriorityColorCode = {
  [TodoPriority.High]: "bg-red-100",
  [TodoPriority.Medium]: "bg-orange-100",
  [TodoPriority.Low]: "bg-green-100",
};
