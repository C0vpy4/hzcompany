"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-10 flex justify-between items-center text-white fixed w-full top-0 left-0 z-50 bg-black/80 backdrop-blur-sm"
    >
      <Link
        href="/"
        className="text-2xl font-bold hover:text-yellow-400 transition-colors"
      >
        HZcompany
      </Link>

      <div className="flex gap-8 text-right ml-auto text-lg">
        <Link
          href="/join-us"
          className="hover:text-yellow-400 transition-colors"
        >
          Join us
        </Link>
        <Link
          href="/contact"
          className="hover:text-yellow-400 transition-colors"
        >
          Contacts
        </Link>
        <Link
          href="/projects"
          className="hover:text-yellow-400 transition-colors"
        >
          Projects
        </Link>
        <Link href="/team" className="hover:text-yellow-400 transition-colors">
          Team
        </Link>
        <Link href="/about" className="hover:text-yellow-400 transition-colors">
          About us
        </Link>
      </div>
    </motion.div>
  );
};
