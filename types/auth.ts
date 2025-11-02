import { z } from "zod";
import {
  signupSchema,
  signinSchema,
  verifyOtpSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  updateDetailsSchema,
  createAdminSchema,
} from "@/lib/schemas/auth";

export type SignUpFormValues = z.infer<typeof signupSchema>;
export type SigninFormValues = z.infer<typeof signinSchema>;
export type VerifyOtpFormValues = z.infer<typeof verifyOtpSchema>;
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
export type UpdateDetailsFormValues = z.infer<typeof updateDetailsSchema>;
export type CreateAdminFormValues = z.infer<typeof createAdminSchema>;

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: string;
  isEmailVerified: boolean;
  lastLogin: string;
  phoneNumber?: string;
  howDidYouHearAboutUs?: string;
  gender?: string;
  employmentStatus?: string;
  academyLevel?: string;
  dateOfBirth?: string;
  countryOfResidence?: string;
  stateOfResidence?: string;
  source?: string;
  applicationFeePaid?: boolean;
}

export interface SignupResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    tokens: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    };
  };
}

export interface SigninResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    tokens: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    };
  };
}

export interface UpdateDetailsResponse {
  success: boolean;
  message: string;
  data: {
    user: Partial<User>;
  };
}

export interface MarketOption {
  value: string;
  label: string;
}
