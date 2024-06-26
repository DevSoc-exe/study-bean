"use client";
import { ArrowUp, Check, CheckCircle2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { typeTodo } from "@/types/ToDo";
import { Progress } from "@/components/ui/progress";
import { v4 as uuidv4 } from "uuid";

const Todos = () => {
  const todos: typeTodo[] = [
    {
      id: "1a79a4d",
      title: "Read Chapter 1 of Biology",
      isDone: false,
    },
    {
      id: "8277e09",
      title: "Practice Spanish Vocabulary",
      isDone: true,
    },
    {
      id: "3c59dc0",
      title: "Prepare for Physics Quiz",
      isDone: false,
    },
    {
      id: "e4da3b7",
      title: "Organize Study Schedule",
      isDone: true,
    },
    {
      id: "1679091",
      title: "Attend Online Lecture",
      isDone: false,
    },
    {
      id: "8f14e45",
      title: "Research for Science Project",
      isDone: true,
    },
    {
      id: "c9f0f89",
      title: "Study for Upcoming Exams",
      isDone: false,
    },
  ];

  const [todo, setTodo] = useState<typeTodo[]>(todos);
  const [newTodo, setNewTodo] = useState<string>("");
  const [totalDone, setTotalDone] = useState<number>();

  useEffect(() => {
    const completed = todo.filter((singleTodo) => singleTodo.isDone !== false);
    setTotalDone(completed.length as number);
  }, [todo]);
  const handleTodo = (id: string) => {
    console.log(id);
    const filteredTodos = todo.map((singleTodo) => {
      if (singleTodo.id == id) {
        singleTodo.isDone = singleTodo.isDone ? false : true;
      }
      return singleTodo;
    });
    setTodo(filteredTodos);
    console.log(filteredTodos);
  };

  return (
    <article className="h-[calc(100vh-1.5rem)] backdrop-blur w-3/5 left-3 border-r border-stone-200 flex flex-col py-4 px-3 justify-start  items-start">
      <div className="flex justify-between">
        <h1 className="text-xl mt-1 text-stone-700 font-bold muted">
          <CheckCircle2 className="inline mr-2" color="green" />
          <span className="text-primary">To-dos</span>
        </h1>
      </div>
      <hr className="w-full my-1" />
      <section className="flex mt-2 flex-col w-full h-full">
        <div className="flex flex-col">
          <div className="flex   justify-between">
            <h2 className="text-lg font-medium">Todays Tasks</h2>
            <h2 className="text-lg font-bold text-right">
              {totalDone != todo.length
                ? `${totalDone} / ${todo.length}`
                : "Done for the day!"}
            </h2>
          </div>
          <div className="mt-2">
            <Progress
              value={totalDone && (totalDone * 100) / todo.length}
              className="w-full"
            ></Progress>
          </div>
        </div>
        <hr className="w-full mt-4"></hr>
        <div className="flex flex-col justify-between h-[calc(100%-6.5rem)]">
          <div className="overflow-y-scroll transition duration-1000 h-11/12">
            {todo &&
              todo.map(
                (todo) =>
                  !todo.isDone && (
                    <div
                      key={todo.id}
                      className="flex flex-row mt-4 px-2 rounded-full justify-start gap-2 items-center py-2 border"
                    >
                      <div
                        id={todo.id}
                        className="p-1 border hover:bg-emerald-400 rounded-full size-8 flex items-center justify-center transition-colors hover:cursor-pointer hover:border-none"
                        onClick={() => handleTodo(todo.id as string)}
                      >
                        <Check
                          color="white"
                          strokeWidth={4}
                          className="size-5 peer"
                        />
                      </div>
                      <span className="font-semibold text-md transition ease-in-out duration-300">
                        {todo.title}
                      </span>
                    </div>
                  )
              )}
            {totalDone != todo.length && <hr className="w-full mt-4"></hr>}
            {todo &&
              todo.map(
                (todo) =>
                  todo.isDone && (
                    <div
                      key={todo.id}
                      className="flex flex-row mt-4 px-2 rounded-full justify-start gap-2 items-center py-2 border bg-green-300"
                    >
                      <div
                        id={todo.id}
                        className="p-2 hover:bg-white rounded-full size-8 flex items-center justify-center transition-colors hover:cursor-pointer hover:border-none"
                        onClick={() => handleTodo(todo.id as string)}
                      >
                        <X
                          color="green"
                          strokeWidth={4}
                          className="size-5 peer"
                        />
                      </div>
                      <span className="font-semibold line-through text-md transition ease-in-out duration-300">
                        {todo.title}
                      </span>
                    </div>
                  )
              )}
          </div>

          <form
            onSubmit={(e) => {
              const newUuid = uuidv4();
              e.preventDefault();
              setTodo([
                ...todo,
                { id: newUuid, title: newTodo, isDone: false },
              ]);
              setNewTodo("");
            }}
            className="flex flex-row justify-center items-center gap-2 mt-4"
          >
            <input
              type="text"
              name="newTaskBar"
              id="newTaskbar"
              className="px-6 rounded-full py-4 border border-emerald-700 w-full focus:outline-none"
              placeholder="Enter new task.."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value as string)}
            />
            <button
              type="submit"
              className="py-4 px-4 rounded-full border border-emerald-700 hover:bg-emerald-400"
            >
              <ArrowUp strokeWidth={3} />
            </button>
          </form>
        </div>
      </section>
    </article>
  );
};

export default Todos;
