import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "inverse";

const styles: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-steel",
  secondary: "border border-line bg-panel text-ink hover:border-ink",
  inverse: "bg-paper text-ink hover:bg-inverse-fg",
};

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold",
        "transition-[transform,background-color,border-color,color] duration-150 ease-out",
        "active:scale-[0.96]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
        styles[variant],
        className,
      )}
      {...props}
    />
  );
}
