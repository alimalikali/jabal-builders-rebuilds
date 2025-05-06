import HomeClient from "@/components/home/Index";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Jabal Builders",
  description: "Welcome to Jabal Builders – Crafting beautiful homes and commercial spaces.",

};

export default function Home() {
  return <HomeClient />;
}
