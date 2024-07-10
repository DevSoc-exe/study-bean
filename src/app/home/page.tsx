import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { CornerDownRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <MaxWidthWrapper className="relative">
            <h1 className="text-8xl font-bold text-primary">studybean.</h1>
            <div className="mt-12 w-full flex items-center justify-center">
                <Link href="/username/todos">
                    <Button variant="default" className="border">
                        <CornerDownRight size={18} strokeWidth={3} className="mr-2" />
                        Get Started
                    </Button>
                </Link>
            </div>

            <div className="absolute mx-auto -bottom-[35vh] right-0 left-0 border w-4/5 py-2 px-6 bg-background shadow-slightHover rounded-2xl">
                <nav className="flex flex-row justify-evenly text-primary">
                    <Button variant="ghost" className="py-1 hover:border">Playground</Button>
                    <Button variant="ghost" className="py-1 hover:border">About</Button>
                    <Button variant="ghost" className="py-1 hover:border">koi teesra</Button>
                </nav>
            </div>
        </MaxWidthWrapper>
    );
}
