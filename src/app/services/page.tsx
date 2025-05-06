import ServicesClient from "@/components/services/Index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Jabal Builders",
  description: "Explore our comprehensive range of construction services, from residential to commercial and industrial projects.",
};

export default function Services() {
  return <ServicesClient />;
}
