import PaginationButton from "../components/button/PaginationButton";
import IconLabelButton from "../components/button/IconLabelButton";
import { Bookmark, Trash2, Wallet, X } from "lucide-react";
import Dropdown from "../components/input/dropdown";
import { useState } from "react";

function Filter() {
  const [paymentMethod, setPaymentMethod] = useState("qris");

  return (
    <div className="w-full grid p-5 grid-cols-2 md:grid-cols-4 gap-5 rounded-2xl border-1 border-light-gray shadow-sm items-end">
      <Dropdown
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
      />
      <Dropdown
        label="Metode Pembayaran"
        required
        icon={Wallet}
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
      />
      <Dropdown
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
      />
      <Dropdown
        label="Filter Cabang: "
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
      />
    </div>
  );
}
export default function ButtonDisplayPage() {
  const numArray = [1, 2, 3, 4, 5, 10, 20, 100, 2390];
  return (
    <div className="w-full h-fit flex flex-wrap gap-5">
      {numArray.map((num) => (
        <PaginationButton label={num} />
      ))}
      {numArray.map((num) => (
        <PaginationButton label={num} isActive={true} />
      ))}
      <IconLabelButton label="Save" Icon={Bookmark} type="primary" />

      <IconLabelButton label="Cancel" Icon={X} type="secondary" />

      <IconLabelButton label="Delete" Icon={Trash2} type="danger" />
      <Filter />
    </div>
  );
}
