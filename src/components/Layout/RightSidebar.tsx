"use client"
import {
    AudioLines,
    Bell,
    MessageSquareText,
    UserPlus,
    Users,
} from "lucide-react";
import Icon from "../Icon";
import { useEffect, useState } from "react";
import Music from "./sub-layouts/Music";
import Notifications from "./sub-layouts/Notifications";
import Chats from "./sub-layouts/Chats";
import Friends from "./sub-layouts/Friends";

enum tabs {
    Music,
    Notifications,
    Friends,
    Chats,
}

const RightSidebar = () => {

    const [activeTab, setActiveTab] = useState<tabs>(tabs.Music)
    useEffect(() => { }, [activeTab])
    return (
        <article className="h-[calc(100vh-1.5rem)] backdrop-blur w-1/4 left-3 border-stone-200 flex flex-col py-4 px-2 justify-start  items-start">
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="text-xl mt-1 text-stone-700 font-bold muted">
                    Right Side
                </h1>
                <div className="flex justify-end items-center flex-row gap-2">
                    <Icon onclick={() => setActiveTab(tabs.Chats)} className={`${activeTab == tabs.Chats ? "border border-primary" : ""} transition-all duration-100`}>
                        <MessageSquareText />
                    </Icon>
                    <Icon onclick={() => setActiveTab(tabs.Friends)} className={`${activeTab == tabs.Friends ? "border border-primary" : ""} transition-all duration-100`}>
                        <Users />
                    </Icon>
                    <Icon onclick={() => setActiveTab(tabs.Notifications)} className={`${activeTab == tabs.Notifications ? "border border-primary" : ""} transition-all duration-100`}>
                        <Bell />
                    </Icon>
                    <Icon onclick={() => setActiveTab(tabs.Music)} className={`${activeTab == tabs.Music ? "border border-primary" : ""} transition-all duration-100`}>
                        <AudioLines />
                    </Icon>
                </div>
            </div>

            <div className="flex flex-col h-full w-full justify-between items-start">

                {
                    activeTab == tabs.Music ? <Music /> : ""
                }
                {
                    activeTab == tabs.Notifications ? <Notifications /> : ""
                }
                {
                    activeTab == tabs.Chats ? <Chats /> : ""
                }
                {
                    activeTab == tabs.Friends ? <Friends /> : ""
                }

                <footer className="w-full">

                </footer>
            </div>
        </article>
    );
};

export default RightSidebar;
