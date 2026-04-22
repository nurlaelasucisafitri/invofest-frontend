import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

import InputText from "../components/ui/InputText"; 
import InputPassword from "../components/ui/InputPassword";
import Button from "../components/Button";

const schema = z.object({
    email: z.string().email("Format email tidak valid").min(1, "Email harus diisi"),
    password: z.string().min(8, "Password minimal 8 karakter"),
});

type FormData = z.infer<typeof schema>;

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        try {
            console.log("Data Login:", data);

            await new Promise((resolve) => setTimeout(resolve, 2000));
            alert("Login Berhasil!");
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                
                <h2 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-4 text-center">
                    Login
                </h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            
                    <InputText
                        label="Email"
                        name="email" 
                        type="email"
                        register={register}
                        error={errors.email?.message}
                        placeholder="Masukkan email anda"
                    />

                    <InputPassword
                        label="Password"
                        name="password"
                        register={register}
                        error={errors.password?.message}
                    />

                    <div className="pt-2">
                        <Button 
                            type="submit" 
                            label="Login" 
                            variant="primary" 
                            isLoading={isLoading} 
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}