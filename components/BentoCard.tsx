import { ReactNode } from "react"

interface BentoCardProps {
  children: ReactNode
  className?: string
  gradientPosition?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "center"
}

export default function BentoCard({ 
  children, 
  className = "",
  gradientPosition = "top-right"
}: BentoCardProps) {
  const gradientClasses = {
    "top-right": "top-0 right-0",
    "top-left": "top-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 bg-gradient-to-br from-background via-background to-muted/10 border border-border/50 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)] ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-30"></div>
      <div className={`absolute ${gradientClasses[gradientPosition]} w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl`}></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
