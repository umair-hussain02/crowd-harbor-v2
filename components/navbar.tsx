"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Moon,
  Sun,
  Calendar,
  Home,
  Info,
  Briefcase,
  Mail,
  BookOpen,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Blogs", href: "/blogs", icon: BookOpen },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] mt-5 py-2 rounded-2xl bg-card/80 backdrop-blur-md border border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              <Image
                src="/logov4.jpg"
                alt="CrowdHarbor Logo"
                width={55}
                height={55}
                className="hidden md:block"
              />
              {/* Mobile logo (smaller size) */}
              <Image
                src="/logov4.jpg"
                alt="CrowdHarbor Logo"
                width={40}
                height={40}
                className="block md:hidden"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {/* <IconComponent className="h-4 w-4" /> */}
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {mounted && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4 text-foreground" />
                ) : (
                  <Moon className="h-4 w-4 text-foreground" />
                )}
              </Button>
            )}
            <Button
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Consult With Experts
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            {navigation.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <div className="flex items-center space-x-2 px-3 py-2">
              {mounted && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4 text-primary" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </Button>
              )}
              <Button
                onClick={scrollToContact}
                size="sm"
                className="bg-primary hover:bg-primary/90"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Consult With Experts
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
