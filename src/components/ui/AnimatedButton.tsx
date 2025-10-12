
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const AnimatedButton = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  icon,
  iconPosition = 'left',
  ...props
}: AnimatedButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full relative overflow-hidden";
  
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary/90 active:scale-[0.98] shadow-sm",
    secondary: "bg-secondary text-foreground hover:bg-secondary/80 active:scale-[0.98]",
    outline: "border border-gray-300 bg-transparent hover:bg-secondary text-foreground active:scale-[0.98]",
    ghost: "bg-transparent hover:bg-secondary text-foreground",
    link: "bg-transparent text-primary hover:underline p-0"
  };
  
  const sizeStyles = {
    sm: "text-xs px-3 h-8",
    md: "text-sm px-5 h-10",
    lg: "text-base px-7 h-12"
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      <span className="z-10">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
      <span className="absolute inset-0 w-full h-full -z-10 before:absolute before:inset-0 before:w-0 before:h-full before:bg-black/5 hover:before:w-full before:transition-all before:duration-300"></span>
    </button>
  );
};

export default AnimatedButton;
