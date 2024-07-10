import { Check, Edit, Pencil, Trash, Trash2, X } from "lucide-react";
import React from "react";
import Icon from "./Icon";
import { TodoPriority, todoPriorityColorCode } from "@/types/ToDo";
import { PriorityDropDwon } from "./PriorityDropDown";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Todo = ({
    classname,
    title,
    id,
    isDone,
    onclick,
    onDelete,
    priority,
    onEdit,
}: {
    classname?: string;
    title: string;
    id: string;
    isDone: boolean;
    onclick: any;
    onDelete?: any;
    priority: TodoPriority;
    onEdit?: any;
}) => {
    let priorityBGColor = todoPriorityColorCode[priority]
    if (!isDone) {
        return (
            <div
                key={id}
                className={`flex flex-row mt-2 px-1 rounded-full justify-between items-center py-1 peer group border peer ${priorityBGColor} ${classname ? classname : ""
                    }`}
            >
                <div className="text-black flex flex-row justify-start items-center gap-2">
                    <div
                        id={id}
                        className="p-1 border hover:bg-emerald-400 rounded-full size-8 flex items-center justify-center transition-colors hover:cursor-pointer hover:border-none"
                        onClick={onclick}
                    >
                        <Check color="white" strokeWidth={4} className="size-5 peer" />
                    </div>
                    <span className="font-semibold text-md transition ease-in-out duration-300">
                        {title}
                    </span>
                </div>
                <div className="hidden flex-row justify-end items-center gap-1 peer-hover:flex group-hover:flex">
                    <Icon href="" onclick={onEdit} className="p-1 size-8">
                        <Pencil className="size-4" />
                    </Icon>
                    <AlertDialog>
                        <AlertDialogTrigger>
                            <Icon
                                href=""
                                className="p-1 size-8 hover:bg-destructive hover:border-none group/cirlce"
                            >
                                <Trash2
                                    className="size-4 group-hover/cirlce:invert"
                                />
                            </Icon>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    The todo "{title}" will be removed.
                                    This todo is not finished yet.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={onDelete}>Delete</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>
        );
    } else {
        return (
            <div
                key={id}
                className="flex flex-row mt-4 px-1 rounded-full justify-between gap-2 items-center py-1 peer group border bg-green-300"
            >
                <div className="flex flex-row justify-start items-center gap-2">
                    <div
                        id={id}
                        className="p-2 hover:bg-white rounded-full size-8 flex items-center justify-center transition-colors hover:cursor-pointer hover:border-none"
                        onClick={onclick}
                    >
                        <X color="green" strokeWidth={4} className="size-5 peer" />
                    </div>
                    <span className="font-semibold line-through text-md transition ease-in-out duration-1000">
                        {title}
                    </span>
                </div>
                <div className="flex-row justify-end items-center gap-1 hidden peer-hover:flex group-hover:flex">
                    <Icon href="" onclick={onEdit} className="p-1 size-8 hover:bg-accent">
                        <Pencil className="size-4" />
                    </Icon>
                    <AlertDialog>
                        <AlertDialogTrigger>
                            <Icon
                                href=""
                                className="p-1 size-8 hover:bg-destructive hover:border-none group/cirlce"
                            >
                                <Trash2 className="size-4 group-hover/cirlce:invert" />
                            </Icon>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    The todo "{title}" will be removed. This todo is not finished
                                    yet.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={onDelete}>Delete</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>
        );
    }
};

export default Todo