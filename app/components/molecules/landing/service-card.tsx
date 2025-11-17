import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface MyProps {
  imageSrc: string | StaticImport;
  alt?: string;
  label: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  imageSrc,
  alt = "service-image",
  label,
  title,
  description,
}: MyProps) {
  return (
    <div
      className="mb-4 flex min-w-[min(calc(100%-30px),400px)] snap-start flex-col gap-y-4 rounded-7 border border-neutral-200 bg-neutral-background p-4 mobile:min-w-auto mobile:gap-y-6"
      style={{ boxShadow: "0px 4px 4px 0px rgba(237, 238, 227, 1)" }}
    >
      {/* Image */}
      <div className="relative min-h-[150px] overflow-hidden rounded-4 pt-[55%]">
        <Image
          src={imageSrc}
          alt={alt}
          className="object-cover object-center"
          fetchPriority="low"
          fill
        />
      </div>

      {/* Body */}
      <div className="flex flex-col gap-y-4 px-2 mobile:gap-y-2 tablet:gap-y-4">
        {/* Header */}
        <div className="w-full border-b border-neutral-200 pb-4">
          {/* Label */}
          <span className="inline-block rounded-6 border border-primary px-4 py-2 text-primary font-b-19">
            {label}
          </span>

          {/* Title */}
          <h3 className="mt-4 text-neutral font-b-1 mobile:mt-2">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-neutral-800 font-b-16">{description}</p>
      </div>
    </div>
  );
}
