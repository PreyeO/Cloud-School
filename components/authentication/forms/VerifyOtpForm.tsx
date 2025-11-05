// components/forms/VerifyOtpForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { verifyOtpSchema } from "@/lib/schemas/auth";
import { VerifyOtpFormValues } from "@/types/auth";
import { useVerifyOtp } from "@/hooks/useVerifyOtp";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import SubmitButton from "@/components/ui/btns/submit-button";
import AuthTitle from "@/components/ui/typography/auth-title";
import AuthSpan from "@/components/ui/typography/auth-span";
import { useAuthFlowStore } from "@/store/useAuthStore";
import { useResendVerification } from "@/hooks/useResendVerification";
import { notify } from "@/lib/notify";

const VerifyOtpForm = () => {
  const form = useForm<VerifyOtpFormValues>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues: { otp: ["", "", "", "", "", ""] },
  });

  const { mutate, isPending } = useVerifyOtp();
  const { mutate: resend, isPending: isResending } = useResendVerification();
  const { email } = useAuthFlowStore();

  const onSubmit = (values: VerifyOtpFormValues) => mutate(values);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-[588px]">
        <AuthTitle
          title="Verify OTP"
          subtitle="Enter the 6-digit code sent to your email"
        />

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-6 mt-6"
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
                          className="w-10 md:h-12 h-12 text-center border rounded-md outline-none focus:ring-2 focus:ring-[#E51919] text-lg font-semibold"
                          value={char}
                          onChange={(e) => {
                            const newOtp = [...field.value];
                            newOtp[index] = e.target.value.slice(-1);
                            field.onChange(newOtp);
                            if (e.target.value && index < newOtp.length - 1) {
                              const next = document.getElementById(
                                `otp-${index + 1}`
                              ) as HTMLInputElement;
                              next?.focus();
                            }
                          }}
                          onKeyDown={(e) => {
                            if (
                              e.key === "Backspace" &&
                              !field.value[index] &&
                              index > 0
                            ) {
                              const prev = document.getElementById(
                                `otp-${index - 1}`
                              ) as HTMLInputElement;
                              prev?.focus();
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
            <AuthSpan>
              Didn’t receive the code?{" "}
              <button
                type="button"
                disabled={isResending}
                onClick={() => {
                  if (!email) {
                    notify.error(
                      "Email not found. Please restart the process."
                    );
                    return;
                  }
                  resend({ email });
                }}
                className="text-[#E51919] underline cursor-pointer disabled:opacity-60"
              >
                {isResending ? "Resending..." : "Resend OTP"}
              </button>
            </AuthSpan>
            <SubmitButton
              label="Verify OTP"
              loadingLabel="Verifying..."
              isPending={isPending}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default VerifyOtpForm;
