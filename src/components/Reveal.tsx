import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";
import { cn } from "../lib/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Tag = as as "div";

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-500 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
