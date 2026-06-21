import { type LucideIcon } from "lucide-react";
import type { ColorVariant } from "../../types/color.variant";

type OverviewCardProps = {
  label: string;
  Icon: LucideIcon;
  TagIcon?: LucideIcon;
  tagLabel: string;
  value: string;
  unit?: string;
  color: ColorVariant;
};

const variantStyles: Record<ColorVariant, string> = {
  green: "bg-light-green text-green",
  red: "bg-light-red text-red",
  blue: "bg-light-blue text-blue",
  yellow: "bg-light-yellow text-yellow",
  purple: "bg-light-purple text-purple",
};
const textVariantStyles: Record<ColorVariant, string> = {
  green: "text-green",
  red: "text-red",
  blue: "text-blue",
  yellow: "text-yellow",
  purple: "text-purple",
};

export default function OverviewCard({
  label,
  Icon,
  TagIcon,
  tagLabel,
  value,
  unit = "",
  color,
}: OverviewCardProps) {
  return (
    <div className="flex flex-col w-full gap-2 rounded-2xl shadow-sm p-4">
      <div className="flex flex-row justify-between items-center">
        {/* Main Icon */}
        <div
          className={`p-4 w-fit rounded-xl items-center justify-center ${variantStyles[color]}`}
        >
          <Icon />
        </div>
        {/* Tag */}
        <div
          className={`flex flex-row gap-2 py-1 px-4 rounded-full items-center justify-center ${variantStyles[color]}`}
        >
          {TagIcon && <TagIcon />}
          <p className="font-semibold">{tagLabel}</p>
        </div>
      </div>
      {/* Card Label */}
      <p className="text-gray-500">{label}</p>
      {/* Value & Unit */}
      <div className="flex flex-row gap-3 items-end">
        <h3 className={textVariantStyles[color]}>{value}</h3>
        {unit && <p className="text-gray-500 pb-2">{unit}</p>}
      </div>
    </div>
  );
}
