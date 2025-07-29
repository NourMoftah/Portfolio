import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

type CardHeaderProps = {
  title: string;
  description: string;
  className?: string;
};

export const CardHeader = ({
  title,
  description,
  className,
}: CardHeaderProps) => {
  return (
    <div
      className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className ?? "")}
    >
      <div className="inline-flex items-center gap-2">
        <StarIcon className="w-6 h-6 text-emerald-300" />
        <h3 className="text-3xl font-bold text-white font-serif">{title}</h3>
      </div>
      <p className="text-white/70 text-sm lg:text-base ">{description}</p>
    </div>
  );
};
