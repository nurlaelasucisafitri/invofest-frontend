import { useState } from 'react';

interface PasswordInputProps {
  label: string;
  name: string;
  register: any;
  error?: string;
}

export const InputPassword: React.FC<PasswordInputProps> = ({
  label,
  name,
  register,
  error
}) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-1 w-full mb-4">
      <label className="text-sm font-normal text-black">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          {...register(name)}
          placeholder="password"
          className="border border-black px-3 py-2 w-full pr-16 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-normal text-black"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputPassword;