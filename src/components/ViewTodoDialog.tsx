"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil } from "lucide-react"
import { TodoPriority, todoPriorityColorCode } from "@/types/ToDo"
import Icon from "./Icon"
import { useState } from "react"
import { api } from "@/lib/api"
import { PriorityDropDwon } from "./PriorityDropDown"


export function ViewTodoDialog({
    todoId,
    todoText,
    priority,
    onDelete,
}: {
    todoId: string;
    todoText: string;
    priority: TodoPriority;
    onDelete: any;
}) {

    const [todoContentInDialog, setTodoContentInDialog] = useState<string>(todoText)
    const [todoPriorityInDialog, setTodoPriorityInDialog] = useState<TodoPriority>(priority)
    const [isTodoUpdated, setIsTodoUpdated] = useState<boolean>(false)

    const handleTodoTextEdit = (e: any) => {
        if (e.target.value == todoText && priority === todoPriorityInDialog) {
            setIsTodoUpdated(false);
        } else {
            setIsTodoUpdated(true);
        }
        setTodoContentInDialog(e.target.value)
    }

    const handleTodoPriorityEdit = (inpPriority: TodoPriority) => {
        if (inpPriority === priority && todoText == todoContentInDialog) {
            setIsTodoUpdated(false);
        } else {
            setIsTodoUpdated(true);
        }
        setTodoPriorityInDialog(inpPriority)
    }

    const handleTodoUpdateSubmission = async () => {

        const updatedTodo = {
            "todo": todoContentInDialog,
            "priority": todoPriorityInDialog
        }

        console.log(updatedTodo);

        try {
            const updateResponse = await api.put(`/todo/${todoId}`, updatedTodo).then(
                (res) => res.data
            )
            console.log(updateResponse);
            if (updateResponse.success) {
                console.log("Update Successful");
            } else {
                console.log("Update Failed");
            }
        } catch (error) {
            console.log("Some error occured: ", error);
        }

    }
    return (

        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="size-8 p-0 mx-auto rounded-full flex justify-center items-center hover:border hover:border-primary transition-colors">
                    <Pencil size={15} />
                </Button>

            </DialogTrigger>
            <DialogContent className="sm:max-w-[725px]">
                <DialogHeader>
                    <DialogTitle>Edit todo</DialogTitle>
                    <DialogDescription>
                        Update your todo here. Click update when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-center gap-4">
                        <Label htmlFor="todoTitle" className="-top-[0.45rem] w-1/12" >
                            Todo
                        </Label>
                        <Input id="todoTitle" value={todoContentInDialog} onChange={(e) => { handleTodoTextEdit(e) }} className="w-11/12" />
                    </div>
                    <div className="flex items-center justify-start gap-4">
                        <Label htmlFor="username" className="-top-[0.45rem] w-1/12">
                            Priority
                        </Label>
                        <div className="w-11/12">
                            <PriorityDropDwon priority={todoPriorityInDialog} onPriorityChange={handleTodoPriorityEdit} />
                        </div>
                    </div>
                </div>
                <DialogFooter className="justify-between w-full flex-row">

                    <AlertDialog>
                        <AlertDialogTrigger>
                            <Button type="button" variant="outline">
                                Close
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle className=" text-destructive">Discard changes?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    There are unsaved changes in the todo. Do you want to discard those changes?
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction className="bg-destructive">
                                    <DialogClose>
                                        Discard
                                    </DialogClose>
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>

                    <Button variant="destructive" onClick={onDelete}>Delete</Button>
                    <Button type="submit" onClick={handleTodoUpdateSubmission} disabled={!isTodoUpdated}>Update Changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
