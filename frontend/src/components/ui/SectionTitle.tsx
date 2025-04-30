import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className,
}) => {
  return (
    <div
      className={cn(centered ? "text-center" : "text-left", "mb-12", className)}
    >
      <h2 className="heading-2 font-bold">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto paragraph">
          {subtitle}
        </p>
      )}
      <div
        className={cn("h-1 w-24 bg-primary mt-4", centered ? "mx-auto" : "")}
      ></div>
    </div>
  );
};

export default SectionTitle;
