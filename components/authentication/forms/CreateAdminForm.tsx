// components/authentication/forms/CreateAdminForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";
import SubmitButton from "@/components/ui/btns/submit-button";
import { useCreateAdmin } from "@/hooks/useCreateAdmin";
import { createAdminSchema } from "@/lib/schemas/auth";
import { CreateAdminFormValues } from "@/types/auth";

export default function CreateAdminForm() {
  const { mutate, isPending } = useCreateAdmin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAdminFormValues>({
    resolver: zodResolver(createAdminSchema),
    defaultValues: {
      firstName: "",
      email: "",
      password: "",
      // role:"admin",
    },
  });

  const onSubmit = (data: CreateAdminFormValues) => mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Label>Name</Label>
          <Input {...register("firstName")} placeholder="Enter name" />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <Label>Email</Label>
          <Input
            {...register("email")}
            type="email"
            placeholder="Enter email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label>Password</Label>
          <Input
            {...register("password")}
            type="password"
            placeholder="Enter password"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        {/* <div>
          <Label>Role</Label>
          <Select {...register("role")}>
            <SelectTrigger className="w-[50%]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="super_admin">Super Admin</SelectItem>
            </SelectContent>
          </Select>
        </div> */}
      </div>
      <div className=" px-4 py-2 w-[20%]">
        <SubmitButton
          label="Create Admin"
          loadingLabel="Creating..."
          isPending={isPending}
        />
      </div>
    </form>
  );
}
