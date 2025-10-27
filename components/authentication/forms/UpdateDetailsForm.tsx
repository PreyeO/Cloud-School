"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateDetailsSchema } from "@/lib/schemas/auth";
import { UpdateDetailsFormValues } from "@/types/auth";
import { useUpdateDetails } from "@/hooks/useUpdateDetails";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SubmitButton from "@/components/ui/btns/submit-button";
import { useEffect } from "react";

const genders = ["Male", "Female", "Other"];
const employmentStatuses = [
  "Employed",
  "Unemployed",
  "Self-employed",
  "Student",
];
const academicLevels = ["Undergraduate", "Graduate", "Postgraduate", "Other"];

interface Props {
  onSuccessClose?: () => void;
}

const UpdateDetailsForm = ({ onSuccessClose }: Props) => {
  const { mutate, isPending, isSuccess } = useUpdateDetails();

  const form = useForm<UpdateDetailsFormValues>({
    resolver: zodResolver(updateDetailsSchema),
    defaultValues: {
      gender: "",
      employmentStatus: "",
      academyLevel: "",
      dateOfBirth: "",
      countryOfResidence: "",
      stateOfResidence: "",
    },
  });

  function onSubmit(values: UpdateDetailsFormValues) {
    mutate(values);
  }

  useEffect(() => {
    if (isSuccess && onSuccessClose) onSuccessClose();
  }, [isSuccess, onSuccessClose]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4"
      >
        {/* Gender */}
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    {genders.map((g) => (
                      <SelectItem key={g} value={g.toLowerCase()}>
                        {g}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Employment Status */}
        <FormField
          control={form.control}
          name="employmentStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employment Status</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {employmentStatuses.map((s) => (
                      <SelectItem key={s} value={s.toLowerCase()}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Academic Level */}
        <FormField
          control={form.control}
          name="academyLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Academic Level</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    {academicLevels.map((lvl) => (
                      <SelectItem key={lvl} value={lvl.toLowerCase()}>
                        {lvl}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date of Birth */}
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Country */}
        <FormField
          control={form.control}
          name="countryOfResidence"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country of Residence</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Nigeria" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* State */}
        <FormField
          control={form.control}
          name="stateOfResidence"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State of Residence</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Lagos" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="md:col-span-2 mt-4">
          <SubmitButton
            label="Submit"
            loadingLabel="Updating..."
            isPending={isPending}
          />
        </div>
      </form>
    </Form>
  );
};

export default UpdateDetailsForm;
