type DropdownElement = {
  icon: IconType;
  text: string;
  onClick?: (value?: any) => any;
};


type TypeTodo = {
  id: string;
  todo_body: string;
  isCompleted: boolean;
  priority: TodoPriority;
};