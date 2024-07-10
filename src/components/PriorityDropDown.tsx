"use client"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TodoPriority, todoPriorityColorCode } from "@/types/ToDo"

import React from "react"

export function PriorityDropDwon({
    priority,
    onPriorityChange
}: {
    priority: TodoPriority;
    onPriorityChange: any;
}) {
    const handlePriorityChange = (value: string) => {
        switch (value) {
            case "High":
                onPriorityChange(TodoPriority.High)
                break;
            case "Medium":
                onPriorityChange(TodoPriority.Medium)
                break;
            case "Low":
                onPriorityChange(TodoPriority.Low)
                break;
            default:
                break;
        }
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className={todoPriorityColorCode[priority]}>{priority as string}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Select Priority</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={priority as string} onValueChange={handlePriorityChange}>
                    <DropdownMenuRadioItem value={TodoPriority.High as string} className="hover:bg-red-100">High</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value={TodoPriority.Medium as string} className="hover:bg-yellow-100">Medium</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value={TodoPriority.Low as string} className="hover:bg-green-100">Low</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
