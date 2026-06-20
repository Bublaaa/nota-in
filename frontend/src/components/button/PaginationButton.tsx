type PaginationButtonProps = {
  label: number | string;
  isActive?: boolean;
  onClick?: () => void;
};

export default function PaginationButton({
  label,
  isActive = false,
  onClick,
}: PaginationButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-xl px-5 py-2 transition-colors cursor-pointer
        ${
          isActive
            ? "bg-primary text-white"
            : "bg-white text-gray-700 hover:bg-gray-100"
        }
      `}
    >
      {label}
    </button>
  );
}
