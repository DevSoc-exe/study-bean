import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const MaxWidthWrapper = ({
    className,
    children,
}: {
    className?: String;
    children: ReactNode;
}) => {
    return (
        <div
            className={cn(
                "mx-auto max-w-screen-lg px-2.5 md:px-20",
                className
            )}
        >
            {children}
        </div>
    );
};

export default MaxWidthWrapper;
