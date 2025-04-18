import * as React from "react"
import { cn } from "@/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
  iconPosition?: "start" | "end"
  className?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, iconPosition = "start", className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-9 w-full items-center rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground",
          "placeholder:text-muted-foreground file:text-foreground dark:bg-input/30",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
      >
        {icon && iconPosition === "start" && (
          <span className="mr-2 text-muted-foreground">{icon}</span>
        )}
        <input
          ref={ref}
          {...props}
          className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground md:text-sm"
        />
        {icon && iconPosition === "end" && (
          <span className="ml-2 text-muted-foreground">{icon}</span>
        )}
      </div>
    )
  }
)

export { Input }
