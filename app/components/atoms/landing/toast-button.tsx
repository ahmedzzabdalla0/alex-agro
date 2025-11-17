"use client";
import { ButtonHTMLAttributes, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

interface MyProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function ToastButton({ className, ...props }: MyProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    if (typeof document !== "undefined") {
      const navMenu = document.getElementById("nav-menu");
      if (navMenu) navMenu.classList.toggle("show", !isOpen);

      document.documentElement.classList.toggle("stop-scroll", !isOpen);
    }
  };

  return (
    <button
      aria-label={`${isOpen ? "close" : "open"} navigation menu`}
      onClick={handleToggle}
      className={twMerge(
        "text-neutral",
        isOpen && "rounded-4 border border-neutral-200 p-2.5",
        className,
      )}
      {...props}
    >
      {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={24} />}
    </button>
  );
}
