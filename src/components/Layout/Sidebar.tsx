"use client";

import {
  AlarmClockCheck,
  Bookmark,
  CircleCheckBig,
  Github,
  LoaderPinwheel,
  Notebook,
  Palette,
  Plus,
  UserRound,
} from "lucide-react";
import Icon from "../Icon";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { toast } from "../ui/use-toast";
import { useStore } from "@/lib/store";
import { SidebarDropdownElements } from "@/constants/data";
import SidebarDropdown from "../ui/UserDropdown";
import { useState } from "react";




const Sidebar = () => {
  const router = useRouter();
  const { setLoggedOut } = useStore();
  const [open, setOpen] = useState(false);

  const logout = async () => {
    try {
      const response = await api.post("/logout");
      if (response.data.success) {
        let newTodoTaostMessage = {
          title: "Logged Out successfully.",
        };
        toast(newTodoTaostMessage);
        setLoggedOut();
        router.replace("/auth");
        return;
      }
    } catch (error) {
      let newTodoTaostMessage = {
        title: "Some Error Occured.",
      };
      toast(newTodoTaostMessage);
      return;
    }
  };

  SidebarDropdownElements[0].onClick = logout;

  return (
    <div className="z-20 h-[calc(100vh-1.5rem)] backdrop-blur w-16 left-3 rounded-xl border border-l-0 border-t-0 flex flex-col py-4 px-1 justify-between items-center shadow-slightHover">
      <div className="mx-auto relative space-y-2">
        <div onClick={() => {
          console.log("click")
          setOpen((value) => !value)
        }} className="relative">
          <Icon>
            <UserRound color="black" />
          </Icon>
          <SidebarDropdown open={open} elements={SidebarDropdownElements} className={""} setOpen={setOpen} />
        </div>
        <hr className="mx-2" />
        <div className="w-10 flex flex-col gap-2">
          <Icon href="/kanishk/todos">
            <CircleCheckBig color="black" className="size-5" />
          </Icon>
          <Icon href="/kanishk/pomodoro">
            <AlarmClockCheck color="black" />
          </Icon>
          <Icon href="/">
            <Notebook color="black" />
          </Icon>
          <Icon href="/">
            <Bookmark color="black" />
          </Icon>
        </div>
      </div>
      <div className="mx-auto w-12 space-y-2">
        <Icon href="/">
          <LoaderPinwheel color="black" className="" />
        </Icon>
        <Icon href="/">
          <Palette color="black" />
        </Icon>
        <Icon href="/">
          <Plus color="black" />
        </Icon>
        <Icon href="/">
          <Github color="black" />
        </Icon>
      </div>
    </div>
  );
};

export default Sidebar;
