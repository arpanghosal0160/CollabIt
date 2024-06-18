
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import React from "react";

export interface HintProps {
    label: string;
    children: React.ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
    sideOffset?: number;
    alignOffset?: number;
};

export const Hint = ({
    label,
    children,
    side,
    align,
    sideOffset,
    alignOffset,
}: HintProps) => {
    <TooltipProvider>
        <Tooltip delayDuration ={100} />
        <TooltipTrigger>
            {children}
        </TooltipTrigger>
        <TooltipContent className="text-white bg-black border-black " side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>
            <p className="font-semibold capitalize">
                {label}
            </p>
        </TooltipContent>
    </TooltipProvider>
}