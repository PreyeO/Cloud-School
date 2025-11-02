import { z } from "zod";

export const signupSchema = z
  .object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Enter a valid email"),
    phoneNumber: z.string().min(7, "Phone number is required"),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      })
      .nonempty({ message: "Password is required" }),

    confirmPassword: z.string().min(6, "Confirm password is required"),
    howDidYouHearAboutUs: z.string().min(1, "This field is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export const updateDetailsSchema = z.object({
  gender: z.string().min(1, "Gender is required"),
  employmentStatus: z.string().min(1, "Employment status is required"),
  academyLevel: z.string().min(1, "Academic level is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  countryOfResidence: z.string().min(1, "Country is required"),
  stateOfResidence: z.string().min(1, "State is required"),
});

export const signinSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const verifyOtpSchema = z.object({
  otp: z.array(z.string().length(1)).length(6, "OTP must be 6 digits"),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("Enter a valid email"),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export const createAdminSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  email: z.string().email("Enter a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
      "Password must include uppercase, lowercase, number, and special character"
    ),
  // role: z.enum(["admin", "super_admin"]),
});
