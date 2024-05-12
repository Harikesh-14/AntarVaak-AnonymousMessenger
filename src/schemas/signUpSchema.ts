import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(3, "Username must be at least 3 characters")
  .max(15, "Username must be at most 15 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must contain only letters, numbers, and underscores");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email("Invalid email"),
  password: z.string().min(8, {message: "Password must be at least 8 characters"}),
})