import IconBadge from "@/components/shared/atoms/icon-badge";
import type { IconType } from "react-icons";

interface MyProps {
  icon: IconType;
  title: string;
  description: string;
}

export default function AboutUsItem({
  icon: Icon,
  title,
  description,
}: MyProps) {
  return (
    <div className="flex gap-x-5">
      {/* Icon */}
      <IconBadge icon={Icon} className="h-fit" />

      {/* Content */}
      <div className="flex flex-col gap-y-2">
        <h3 className="text-neutral font-b-5">{title}</h3>
        <p className="max-w-[550px] text-neutral-800 font-b-16">
          {description}
        </p>
      </div>
    </div>
  );
}
