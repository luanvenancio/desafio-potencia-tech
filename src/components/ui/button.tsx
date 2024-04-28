import { ComponentProps } from "react";
import { IconType } from "react-icons";
import { type VariantProps, tv } from "tailwind-variants";
import { cn } from "../../lib/utils/index";

const button = tv({
  base: "font-normal flex flex-row w-fit items-center gap-3 hover:cursor-pointer",
  variants: {
    variant: {
      primary: "bg-primary hover:bg-primary/80 text-white",
      secondary: "bg-secondary hover:bg-secondary/80 text-blue",
    },
    size: {
      md: "py-2.5 px-3 rounded-xl",
      base: "py-1.5 px-4 rounded-lg",
      lg: "mt-8 sm:mt-12 py-4 px-14 text-2xl font-bold",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps
  extends ComponentProps<"a">,
    VariantProps<typeof button> {
  icon?: IconType;
}

export function Button({
  className,
  icon: Icon,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <a {...props} className={cn(button({ variant, size, className }))}>
      {Icon ? (
        <>
          {props.children}
          <div className="w-9 h-9 rounded-full flex items-center justify-center">
            <Icon className="w-4 h-4" />
          </div>
        </>
      ) : (
        props.children
      )}
    </a>
  );
}
