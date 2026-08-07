import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[inset_0_1px_0_hsl(var(--foreground)/0.18),0_4px_16px_hsl(172_66%_50%/0.18)] hover:bg-primary/92 hover:shadow-[inset_0_1px_0_hsl(var(--foreground)/0.22),0_6px_20px_hsl(172_66%_50%/0.24)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-white/[0.1] bg-white/[0.03] text-foreground shadow-[inset_0_1px_0_hsl(var(--foreground)/0.05)] backdrop-blur-sm hover:bg-secondary/80 hover:border-primary/40",
        secondary:
          "bg-secondary/80 text-secondary-foreground border border-white/[0.06] shadow-[inset_0_1px_0_hsl(var(--foreground)/0.05)] hover:bg-secondary",
        ghost: "hover:bg-secondary/70 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary text-primary-foreground font-semibold shadow-[inset_0_1px_0_hsl(var(--foreground)/0.2),0_6px_24px_hsl(172_66%_50%/0.22)] glow-effect hover:scale-[1.02]",
        heroOutline:
          "border border-primary/40 bg-primary/[0.04] text-foreground shadow-[inset_0_1px_0_hsl(var(--foreground)/0.06)] backdrop-blur-sm hover:bg-primary/10 hover:border-primary/70 hover:scale-[1.02]",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
