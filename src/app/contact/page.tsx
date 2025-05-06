import ContactClient from "@/components/contact/Index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Jabal Builders",
  description: "Contact us for more information about our services.",
};

export default function Contact() {
  return <ContactClient />;
}

