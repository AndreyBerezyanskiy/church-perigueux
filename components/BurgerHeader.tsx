"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialLinks from "./SocialLinks";
import LanguageSelect from "./LanguageSelect";

export default function BurgerHeader({
  locale,
  items,
}: {
  locale: string;
  items: { label: string; path: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Burger button */}
      <button
        className="relative z-50 flex flex-col gap-1.5 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-6 bg-black"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block h-0.5 w-6 bg-black"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-6 bg-black"
        />
      </button>

      {/* Fullscreen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 h-screen w-screen bg-white z-40 flex flex-col gap-16 p-8"
          >
            <ul className="flex flex-col gap-6 text-2xl mt-16">
              {items.map((item) => (
                <li key={item.path}>
                  <Link
                    href={`/${locale}/${item.path}`}
                    onClick={() => setIsOpen(false)}
                    className={
                      pathname === `/${locale}/${item.path}`
                        ? "font-bold"
                        : "hover:underline"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center">
              <SocialLinks />
              <LanguageSelect locale={locale} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
