import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/Layout/Sidebar";
import GroupSidebar from "@/components/Layout/GroupSidebar";
import RightSidebar from "@/components/Layout/RightSidebar";
import { Toaster } from "@/components/ui/toaster"
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
    title: "Collab Study",
    description: "Next Frontend",
};

// @kanishk smart boy :kiss
export default function PlaygroundLayout({
    children,
    params// will be a page or nested layout
}: {
    children: React.ReactNode
    params: any
}) {
    const username = params.username as string
    return (
        <html lang="en">
            <body className={`relative gap-2 h-screen overflow-y-hidden flex justify-between px-4 items-center bg-background ${poppins.className}`}>
            
                    <Sidebar />
                    <GroupSidebar username={username} />
                    {children}
                    <RightSidebar />
                    <Toaster />
                
            </body>
        </html>
    )
}