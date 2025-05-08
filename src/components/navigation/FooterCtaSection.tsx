"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FooterCtaSection = () => {


  return (
    <section className="py-20  text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Ready to Start Your Project?</h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Get in touch with us today to discuss how we can bring your construction vision to life.
        </p>
        <Link href="/contact">
          <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg">
            Contact Us Today
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FooterCtaSection;
