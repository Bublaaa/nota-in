import { type LucideIcon } from "lucide-react";
import type { ColorVariant } from "../../types/color.variant";

type BalanceCardProps = {
  Icon: LucideIcon;
  balanceSource: string;
  balanceLabel?: string;
  balanceAmount: string;
  transactionLabel?: string;
  transactionAmount: string;
  transactionUnit?: string;
  color: ColorVariant;
};

const variantStyles: Record<ColorVariant, string> = {
  green: "bg-light-green text-green",
  red: "bg-light-red text-red",
  blue: "bg-light-blue text-blue",
  yellow: "bg-light-yellow text-yellow",
  purple: "bg-light-purple text-purple",
};

export default function BalanceCard({
  Icon,
  balanceSource,
  balanceLabel = "Pendapatan",
  balanceAmount,
  transactionLabel = "Total transaksi",
  transactionAmount,
  transactionUnit = "trx",
  color,
}: BalanceCardProps) {
  return (
    <div className="flex flex-col gap-5 p-5 rounded-2xl border-1 border-light-gray">
      {/* Balance Source */}
      <div className="flex flex-col gap-4">
        <div
          className={`p-4 w-fit rounded-xl items-center justify-center ${variantStyles[color]}`}
        >
          <Icon />
        </div>
        <h4>{balanceSource}</h4>
      </div>
      {/* Balance Amount*/}
      <div className="flex flex-col">
        <p>{balanceLabel}</p>
        <h4 className="text-green">{balanceAmount}</h4>
      </div>
      {/* Divider */}
      <div className="h-px w-full bg-light-gray" />
      {/* Total Transactions */}
      <div className="flex flex-col gap-1">
        <p>{transactionLabel}</p>
        <div className="flex flex-row gap-1 items-end">
          <h4>{transactionAmount}</h4>
          <p className="pb-1">{transactionUnit}</p>
        </div>
      </div>
    </div>
  );
}
