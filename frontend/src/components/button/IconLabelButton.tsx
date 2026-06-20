import { type LucideIcon } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "danger";

type IconLabelButtonProps = {
  label: string;
  Icon: LucideIcon;
  type?: ButtonVariant;
  onClick?: () => void;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary:
    "bg-white border border-2 border-light-gray text-gray-700 hover:bg-gray-200",
  danger: "bg-red text-white hover:bg-red-600",
};

export default function IconLabelButton({
  label,
  Icon,
  type = "primary",
  onClick,
}: IconLabelButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg
        transition-colors duration-200
        cursor-pointer
        ${variantStyles[type]}
      `}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </button>
  );
}
