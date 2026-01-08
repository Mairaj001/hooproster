import * as React from "react";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

// Simple wrapper components for resizable panels
// Note: react-resizable-panels v4 has different exports, so we're using basic div elements
// If you need full resizable functionality, consider updating the import structure

const ResizablePanelGroup = ({
  className,
  direction = "horizontal",
  ...props
}: React.ComponentProps<"div"> & {
  direction?: "horizontal" | "vertical";
  onLayout?: (sizes: number[]) => void;
}) => (
  <div
    className={cn(
      "flex h-full w-full",
      direction === "vertical" && "flex-col",
      className
    )}
    {...props}
  />
);

const ResizablePanel = ({
  className,
  defaultSize,
  minSize,
  maxSize,
  ...props
}: React.ComponentProps<"div"> & {
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
}) => (
  <div
    className={cn("flex-1", className)}
    {...props}
  />
);

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  withHandle?: boolean;
}) => (
  <div
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </div>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
