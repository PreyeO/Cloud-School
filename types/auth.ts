import { z } from "zod";
import {
  signupSchema,
  signinSchema,
  verifyOtpSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  updateDetailsSchema,
} from "@/lib/schemas/auth";

export type SignUpFormValues = z.infer<typeof signupSchema>;
export type SigninFormValues = z.infer<typeof signinSchema>;
export type VerifyOtpFormValues = z.infer<typeof verifyOtpSchema>;
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
export type UpdateDetailsFormValues = z.infer<typeof updateDetailsSchema>;

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

  // Optional profile info (for updateDetails)
  gender?: string;
  employmentStatus?: string;
  academyLevel?: string;
  dateOfBirth?: string;
  countryOfResidence?: string;
  stateOfResidence?: string;
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
