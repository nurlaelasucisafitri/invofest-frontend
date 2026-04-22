import React from 'react';

interface BaseInputProps {
  label: string;
  name: string;
  register: any;
  error?: string;
  type?: string;
  placeholder?: string;
}

export const InputText: React.FC<BaseInputProps> = ({
  label,
  name,
  register,
  error,
  type = "text",
  placeholder
}) => {
  return (
    <div className="flex flex-col gap-1 w-full mb-4">
      <label className="text-sm font-normal text-black">{label}</label>
      
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="border border-black px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputText;