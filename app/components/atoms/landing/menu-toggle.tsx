import { LabelHTMLAttributes } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

interface MyProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export default function MenuToggle({ className, ...props }: MyProps) {
  return (
    <>
      <input
        type="checkbox"
        id="main-nav-toggle"
        className="peer overlay-toggle hidden"
      />
      <label
        htmlFor="main-nav-toggle"
        className={twMerge(
          "group cursor-pointer text-neutral peer-checked:rounded-4 peer-checked:border peer-checked:border-neutral-200 peer-checked:p-2.5",
          className,
        )}
        aria-label="toggle navigation menu"
        role="button"
        {...props}
      >
        <AiOutlineMenu size={24} className="group-[.peer:checked~&]:hidden" />
        <AiOutlineClose
          size={20}
          className="hidden group-[.peer:checked~&]:block"
        />
      </label>
    </>
  );
}
