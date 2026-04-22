import React from 'react';

interface TextareaProps { 
    label: string; 
    name: string; 
    register: any; 
    error?: string; 
    placeholder?: string; 
} 

export const Textarea: React.FC<TextareaProps> = ({ 
    label, 
    name, 
    register, 
    error, 
    placeholder 
}) => { 
    return ( 
        <div className="flex flex-col gap-1 w-full"> 
            <label className="text-sm font-semibold text-gray-700">{label}</label> 
            
            <textarea 
                {...register(name)} 
                placeholder={placeholder} 
                className="border border-gray-300 rounded-lg px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none" 
            /> 

            {error && <p className="text-red-500 text-xs italic">{error}</p>} 
        </div> 
    ); 
};

export default Textarea;