import type { Metadata } from "next";
import AboutClient from "@/components/about/Index";

export const metadata: Metadata = {
  title: "About | Jabal Builders",
  description: "Learn about our company, our team, and our commitment to excellence.",
};

export default function About() {
  return <AboutClient />;
}
