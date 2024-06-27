"use client"
import {
    ArrowUp,
    CheckCircle2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { typeTodo } from "@/types/ToDo";
import { Progress } from "@/components/ui/progress";
import { v4 as uuidv4 } from 'uuid';
import Todo from "@/components/Todo";
import { useToast } from "@/components/ui/use-toast";

const Todos = () => {
    const { toast } = useToast()
    const todos: typeTodo[] = [
        {
            id: "1a79a4d",
            title: "Read Chapter 1 of Biology",
            isDone: false
        },
        {
            id: "8277e09",
            title: "Practice Spanish Vocabulary",
            isDone: true
        },
        {
            id: "3c59dc0",
            title: "Prepare for Physics Quiz",
            isDone: false
        },
        {
            id: "e4da3b7",
            title: "Organize Study Schedule",
            isDone: true
        },
        {
            id: "1679091",
            title: "Attend Online Lecture",
            isDone: false
        },
        {
            id: "8f14e45",
            title: "Research for Science Project",
            isDone: true
        },
        {
            id: "c9f0f89",
            title: "Study for Upcoming Exams",
            isDone: false
        }
    ];
    const [todo, setTodo] = useState<typeTodo[]>(todos)
    const [newTodo, setNewTodo] = useState<string>("")
    const [totalDone, setTotalDone] = useState<number>()
    // const [isEditing, setIsEditing] = useState<boolean>(false)

    useEffect(() => {
        const completed = todo.filter((singleTodo) => singleTodo.isDone !== false)
        setTotalDone(completed.length as number)
    }, [todo])

    const handleTodo = (id: string) => {
        console.log(id);
        const filteredTodos = todo.map((singleTodo) => {
            if (singleTodo.id == id) {
                singleTodo.isDone = singleTodo.isDone ? false : true;
                if (singleTodo.isDone) {
                    const todoCompleteTaostMessage = {
                        title: totalDone && (totalDone < todo.length - 1) ? `Only ${todo.length - (totalDone as number) - 1} left! You got this.` : `Done for the day!`,
                        description: totalDone && (totalDone < todo.length - 1) ? "Kudos on completing your task!" : "Sit back and relax!",
                    }
                    toast(todoCompleteTaostMessage)
                }
            }
            return singleTodo;
        })
        setTodo(filteredTodos)
        console.log(filteredTodos);
    }

    const handleNewTodo = () => {
        let newTodoTaostMessage = {}
        if (newTodo.length == 0) {
            newTodoTaostMessage = {
                variant: "destructive",
                title: `The task field can not be null.`,
                description: `EMT-TF: Empty task field.`,
            }
        } else {
            setTodo([...todo, { id: uuidv4() as string, title: newTodo, isDone: false }]);
            newTodoTaostMessage = {
                title: `Added to your list.`,
                description: `+ ${newTodo}`,
            }
        }
        toast(newTodoTaostMessage);
        setNewTodo("")

    }

    const handleDeleteTodo = (delId: string, delTitle: string) => {
        const filteredTodoList = todo.filter((singleTodo) => singleTodo.id != delId)
        setTodo(filteredTodoList);
        const delTodoTaostMessage = {
            title: `Removed from your list.`,
            description: `- ${delTitle}`,
        }
        toast(delTodoTaostMessage);
    }

    // const handleEditTodo = (editId: string, editTitle: string) => {
    //     setIsEditing(true);
    // }


    return (
        <article className="h-[calc(100vh-1rem)] backdrop-blur w-3/5 left-3 border-r border-stone-200 flex flex-col py-4 px-3 justify-start  items-start">
            <div className="flex justify-between">
                <h1 className="text-xl mt-1 text-stone-700 font-bold muted">
                    <CheckCircle2 className="inline mr-2" color="green" />
                    <span className="text-primary">
                        To-dos
                    </span>
                </h1>
            </div>
            <hr className='w-full my-1' />
            <section className="flex mt-2 flex-col w-full h-[calc(100%-3.5rem)]">
                <div className="flex flex-col">
                    <div className="flex   justify-between">
                        <h2 className="text-lg font-medium">Todays Tasks</h2>
                        <h2 className="text-lg font-bold text-right">
                            {totalDone != todo.length ? `${totalDone} / ${todo.length}` : "Done for the day!"}
                        </h2>
                    </div>
                    <div className="mt-2">
                        <Progress value={totalDone && ((totalDone * 100) / todo.length)} className="w-full">
                        </Progress>
                    </div>
                </div>
                <hr className="w-full mt-4"></hr>
                <div className="flex flex-col justify-between overflow-hidden h-full">
                    <div className="transition h-full duration-1000 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-primary scrollbar-track-slate-200 pr-2">
                        {todo &&
                            todo.map((todo) => (!todo.isDone &&
                                <Todo title={todo.title} classname="" id={todo.id} onclick={() => handleTodo(todo.id as string)} isDone={todo.isDone} onDelete={() => handleDeleteTodo(todo.id as string, todo.title as string)} />
                            ))
                        }
                        {totalDone != todo.length && <hr className="w-full mt-4"></hr>}
                        {todo &&
                            todo.map((todo) => (todo.isDone &&
                                <Todo title={todo.title} classname="" id={todo.id} onclick={() => handleTodo(todo.id as string)} isDone={todo.isDone} onDelete={() => handleDeleteTodo(todo.id as string, todo.title as string)} />
                            ))
                        }
                    </div>

                    <form className="flex flex-row justify-center items-center gap-2 mt-5"
                        onSubmit={(e) => { e.preventDefault() }}>
                        <input type="text" name="newTaskBar" id="newTaskbar" className="px-6 rounded-full py-4 border border-emerald-700 w-full focus:outline-none" placeholder="Enter new task.." value={newTodo} onChange={(e) => setNewTodo(e.target.value as string)} />
                        <button type="submit" className="py-4 px-4 rounded-full border border-emerald-700 hover:bg-emerald-400" onClick={handleNewTodo} >
                            <ArrowUp strokeWidth={3} />
                        </button>
                    </form>
                </div>
            </section>
        </article >
    );
};

export default Todos
