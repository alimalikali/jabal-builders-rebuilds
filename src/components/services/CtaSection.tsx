import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-muted rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-poppins mb-2">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600">Contact us today for a free consultation and quote.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="/contact">
              <Button className="bg-secondary hover:bg-secondary/90">
                Get in Touch
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}