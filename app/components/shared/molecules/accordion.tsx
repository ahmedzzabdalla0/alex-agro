// molecules/Accordion.tsx (NO "use client" needed!)
import { useId } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { twMerge } from "tailwind-merge";

interface MyProps {
  group?: string;
  title: string;
  description: string;
  defaultOpen?: boolean;
}

export default function Accordion({
  group = "accordion-group",
  title,
  description,
  defaultOpen = false,
}: MyProps) {
  const inputId = useId();

  return (
    <div className="rounded-7 border border-secondary-100 p-4 mobile:p-6">
      <input
        type="radio"
        name={group}
        id={inputId}
        className="peer/accordion hidden"
        defaultChecked={defaultOpen}
      />

      <label htmlFor={inputId} className="flex cursor-pointer justify-between">
        <p className="text-neutral font-b-13">{title}</p>
        <IoIosArrowDropright
          className={twMerge(
            "text-2xl text-secondary-200 transition-transform peer-checked/accordion:rotate-90 tablet:text-[36px]",
          )}
        />
      </label>

      {/* Tail (Content) */}
      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 peer-checked/accordion:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <div className="mt-4 border-t border-dashed border-neutral pt-4 mobile:mt-6 mobile:pt-6">
            <p className="text-neutral font-b-16">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
