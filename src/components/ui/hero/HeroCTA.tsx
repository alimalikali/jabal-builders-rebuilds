
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroCTAProps {
  text: string;
  link: string;
}

const HeroCTA = ({ text, link }: HeroCTAProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
    >
      <Link href={link}>
        <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg">
          {text}
        </Button>
      </Link>
    </motion.div>
  );
};

export default HeroCTA;
