// molecules.tsx (NO "use client" needed!)
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
    <div>
      <input
        type="radio"
        name={group}
        id={inputId}
        className="peer hidden"
        defaultChecked={defaultOpen}
      />

      <label
        htmlFor={inputId}
        className="group block rounded-7 border border-secondary-100 p-4 peer-not-checked:clickable mobile:p-6"
      >
        {/* Head */}
        <div className="flex items-center justify-between gap-x-2">
          <p className="text-neutral font-b-13">{title}</p>
          <IoIosArrowDropright
            className={twMerge(
              "shrink-0 text-2xl text-secondary-200 transition-transform group-peer-checked:rotate-90 tablet:text-[36px]",
            )}
          />
        </div>

        {/* Tail (Content) */}
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-peer-checked:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <div className="mt-4 border-t border-dashed border-neutral pt-4 mobile:mt-6 mobile:pt-6">
              <p className="text-neutral font-b-16">{description}</p>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
}
