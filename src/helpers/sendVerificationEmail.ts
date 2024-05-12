import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponses";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verificationCode: string
): Promise<ApiResponse>{
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "AntarVaak - Verify your email",
      react: VerificationEmail({username, otp: verificationCode}),
    })

    return {
      success: true,
      message: "Verification email sent"
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Failed to send verification email"
    };
  }
}