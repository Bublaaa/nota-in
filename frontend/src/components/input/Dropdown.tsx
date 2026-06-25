import { useEffect, useRef, useState } from "react";
import { ChevronRight, type LucideIcon } from "lucide-react";

type DropdownOption = {
  label: string;
  value: string;
};

type OrientationVariant = "row" | "col";
const orientationStyles: Record<OrientationVariant, string> = {
  row: "flex-row gap-2 items-center",
  col: "flex-col gap-2",
};

type DropdownProps = {
  label?: string;
  options: DropdownOption[];
  value: string;
  orientation?: OrientationVariant;
  onChange: (value: string) => void;
  icon?: LucideIcon;
  required?: boolean;
  placeholder?: string;
};

export default function Dropdown({
  label,
  options,
  value,
  orientation = "col",
  onChange,
  icon: Icon,
  required = false,
  placeholder = "Select an option",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative flex ${orientationStyles[orientation]}`}
    >
      {/* Label */}
      <label className="flex items-center gap-1 text-sm font-medium">
        {Icon && <Icon className="h-5 w-5 text-dark-gray" />}
        {label}

        {required && <span className="text-red">*</span>}
      </label>

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          flex w-full items-center justify-between rounded-2xl border border-light-gray h-fit bg-medium-gray px-4 py-3 transition-colors hover:border-primary
        "
      >
        <div className="flex items-center gap-3">
          <span>{selectedOption?.label ?? placeholder}</span>
        </div>

        <ChevronRight
          className={`h-4 w-4 transition-transform duration-200 text-dark-gray ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>

      {/* Options */}
      {isOpen && (
        <div
          className="
            absolute top-full z-50 mt-2 w-full
            overflow-hidden rounded-lg
            border border-light-gray
            bg-white shadow-lg
          "
        >
          {options.map((option) => {
            const isSelected = option.value === value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`
                  flex w-full items-center
                  px-4 py-3 text-left
                  transition-colors
                  ${
                    isSelected
                      ? "hover:bg-gray-100 font-medium text-blue"
                      : "hover:bg-gray-100"
                  }
                `}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

//* HOW TO USE
{
  /* <Dropdown
  label="Metode Pembayaran"
  required
  orientation="row"
  value={paymentMethod}
  onChange={setPaymentMethod}
  options={[
    {
      label: "Cash",
      value: "cash",
    },
    {
      label: "QRIS",
      value: "qris",
    },
    {
      label: "Transfer",
      value: "transfer",
    },
  ]}
/>; */
}
