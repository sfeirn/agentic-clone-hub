import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Platform Access | Agentic Clone Hub",
  description:
    "Log in to the Agentic Clone Hub execution platform to manage your AI Clone, campaigns, and automated marketing.",
};

export default function LoginPage() {
  return <LoginForm />;
}
