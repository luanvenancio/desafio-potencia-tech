import React from "react";

interface metricsProps {
  content: string;
  quantity: number;
  children: React.ReactNode;
}

export function Metrics({ content, quantity, children }: metricsProps) {
  return (
    <div className="flex flex-col space-y-1 items-center">
      <h3 className="font-normal italic text-xs text-[#5A5A5A]">{content}</h3>
      <div className="flex gap-1">
        {children}
        <span className="italitc font-normal text-sm text-blue">
          {quantity.toLocaleString("en-US", {
            maximumFractionDigits: 2,
            notation: "compact",
            compactDisplay: "short",
          })}
        </span>
      </div>
    </div>
  );
}
