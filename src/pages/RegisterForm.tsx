import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

import InputText from "../components/ui/InputText";
import InputPassword from "../components/ui/InputPassword";
import Select from "../components/ui/Select";
import Textarea from "../components/ui/Textarea";
import Button from "../components/Button";

const schema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(8, "Minimal 8 karakter"),
  eventCategory: z.string().min(1, "Pilih kategori event"),
  bio: z.string().min(10, "Bio minimal 10 karakter"),
});

type FormData = z.infer<typeof schema>;

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      console.log("Data Berhasil:", data);
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert("Pendaftaran Berhasil!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
        
        <h1 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-4 text-center">
          Registrasi Event
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          
          <InputText 
            label="Nama Lengkap" 
            name="name" 
            register={register} 
            error={errors.name?.message} 
          />
          
          <InputText 
            label="Email" 
            name="email" 
            type="email" 
            register={register} 
            error={errors.email?.message} 
          />

          <InputPassword 
            label="Password" 
            name="password" 
            register={register} 
            error={errors.password?.message} 
          />

          <Select 
            label="Kategori Event"
            name="eventCategory"
            register={register}
            error={errors.eventCategory?.message}
            options={[
              { label: "IT Seminar", value: "IT Seminar" },
              { label: "IT Talkshow", value: "IT Talkshow" },
              { label: "IT Competition", value: "IT Competition" },
              { label: "IT Workshop", value: "IT Workshop" }
            ]}
          />

          <Textarea 
            label="Bio Singkat"
            name="bio"
            register={register}
            error={errors.bio?.message}
            placeholder="Tentang dirimu..."
          />

          <div className="pt-4">
            <Button 
              label="Daftar Sekarang" 
              type="submit" 
              isLoading={loading} 
              variant="primary" 
            />
          </div>

        </form>
      </div>
    </div>
  );
}