"use client";

import { useCallback, useEffect, useRef } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { twMerge } from "tailwind-merge";

interface MyProps {
  group?: string;
  title: string;
  description: string;
  defaultOpen?: boolean;
}

export default function Accordion({
  group,
  title,
  description,
  defaultOpen = false,
}: MyProps) {
  const groupId = group || "accordion-id";
  const accordionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const openAccordion = useCallback(() => {
    const target = contentRef.current;
    if (target) {
      target.style.maxHeight = target.scrollHeight + "px";
    }
    const items = document.querySelectorAll(`div[data-group=${groupId}]`);
    items.forEach((item) => {
      item?.classList.toggle("opened", item === accordionRef.current);
    });
  }, [groupId]);

  useEffect(() => {
    if (defaultOpen) {
      openAccordion();
    }
  }, [defaultOpen, openAccordion]);

  return (
    <div
      ref={accordionRef}
      data-group={groupId}
      className="group rounded-7 border border-secondary-100 p-4 mobile:p-6 [:not(.opened)]:clickable"
      onClick={openAccordion}
    >
      {/* Head */}
      <div className="flex justify-between">
        <p className="text-neutral font-b-13">{title}</p>
        <IoIosArrowDropright
          className={twMerge(
            "text-2xl text-secondary-200 transition-[rotate] group-[.opened]:rotate-90 tablet:text-[36px]",
          )}
        />
      </div>

      {/* Tail */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] group-[:not(.opened)]:max-h-0!"
      >
        <div className="mt-4 border-t border-dashed border-neutral pt-4 mobile:mt-6 mobile:pt-6">
          <p className="text-neutral font-b-16">{description}</p>
        </div>
      </div>
    </div>
  );
}
