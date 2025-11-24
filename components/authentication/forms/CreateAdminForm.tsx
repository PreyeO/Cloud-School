"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/ui/btns/submit-button";
import { useCreateAdmin } from "@/hooks/useCreateAdmin";
import { createAdminSchema } from "@/lib/schemas/auth";
import { CreateAdminFormValues } from "@/types/auth";

const CreateAdminForm = () => {
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
    },
  });

  const onSubmit = (data: CreateAdminFormValues) => mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1  lg:grid-cols-4 gap-4">
        <div className="w-full">
          <Label>Name</Label>
          <Input
            {...register("firstName")}
            placeholder="Enter name"
            className="w-full"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="w-full">
          <Label>Email</Label>
          <Input
            {...register("email")}
            type="email"
            placeholder="Enter email"
            className="w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="w-full">
          <Label>Password</Label>
          <Input
            {...register("password")}
            type="password"
            placeholder="Enter password"
            className="w-full"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      {/* Button Section */}
      <div className="w-full flex justify-start ">
        <div className="w-full sm:w-auto">
          <SubmitButton
            label="Create Admin"
            loadingLabel="Creating..."
            isPending={isPending}
          />
        </div>
      </div>
    </form>
  );
};

export default CreateAdminForm;
