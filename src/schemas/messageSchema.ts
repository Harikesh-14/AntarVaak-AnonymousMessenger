import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(1, "Message must not be empty")
    .max(1000, "Message must be at most 1000 characters")
});