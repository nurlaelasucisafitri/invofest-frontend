import React from 'react';

interface ButtonProps { 
    label: string; 
    type?: "button" | "submit"; 
    variant?: "primary" | "outline"; 
    isLoading?: boolean; 
} 

export const Button: React.FC<ButtonProps> = ({ 
    label, 
    type = "button", 
    variant = "primary", 
    isLoading = false 
}) => { 
  
    const base = "w-full px-4 py-2 rounded font-medium transition-all disabled:opacity-50"; 
    const styles = { 
        primary: "bg-[#801b1b] text-white hover:bg-[#601414]", 
        outline: "border border-[#801b1b] text-[#801b1b] hover:bg-red-50" 
    }; 

    return ( 
        <button 
            type={type} 
            disabled={isLoading} 
            className={`${base} ${styles[variant]}`} 
        > 
            {isLoading ? "Loading..." : label} 
        </button> 
    ); 
};

export default Button;