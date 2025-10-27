"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import AuthTitle from "@/components/ui/typography/auth-title";
import AuthSpan from "@/components/ui/typography/auth-span";
import SubmitButton from "@/components/ui/btns/submit-button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { verifyOtpSchema } from "@/lib/schemas/auth";
import { useVerifyOtp } from "@/hooks/useVerifyOtp";
import { VerifyOtpFormValues } from "@/types/auth";

const VerifyOtpForm = () => {
  const form = useForm<VerifyOtpFormValues>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues: {
      otp: ["", "", "", "", "", ""], // 6-digit OTP
    },
  });

  const { mutate, isPending } = useVerifyOtp();

  const onSubmit = (values: VerifyOtpFormValues) => {
    mutate(values);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-[588px] mx-auto">
        <AuthTitle
          title="Verify OTP"
          subtitle="Enter the 6-digit code sent to your email or phone number"
          className="text-center"
        />

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-6 mt-6"
          >
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex gap-2 justify-center">
                      {field.value.map((char, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength={1}
                          id={`otp-${index}`}
                          className="w-12 h-12 text-center border rounded-md outline-none focus:ring-2 focus:ring-[#E51919] text-lg font-semibold"
                          value={char}
                          onChange={(e) => {
                            const newOtp = [...field.value];
                            newOtp[index] = e.target.value.slice(-1);
                            field.onChange(newOtp);

                            // Auto focus next input
                            if (
                              e.target.value &&
                              index < field.value.length - 1
                            ) {
                              const nextInput = document.getElementById(
                                `otp-${index + 1}`
                              ) as HTMLInputElement;
                              nextInput?.focus();
                            }
                          }}
                          onKeyDown={(e) => {
                            // Move to previous input on Backspace if empty
                            if (
                              e.key === "Backspace" &&
                              !field.value[index] &&
                              index > 0
                            ) {
                              const prevInput = document.getElementById(
                                `otp-${index - 1}`
                              ) as HTMLInputElement;
                              prevInput?.focus();
                            }
                          }}
                        />
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <AuthSpan>
                Didn’t receive the code?{" "}
                <Link href="/auth/resend">
                  <span className="text-[#E51919] underline cursor-pointer">
                    Resend OTP
                  </span>
                </Link>
              </AuthSpan>
            </div>

            <div className="mt-4">
              <SubmitButton
                label="Verify OTP"
                loadingLabel="Verifying..."
                isPending={isPending}
              />
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default VerifyOtpForm;
