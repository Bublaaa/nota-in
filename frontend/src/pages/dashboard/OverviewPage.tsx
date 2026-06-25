import {
  Banknote,
  ChartColumn,
  Landmark,
  LucideQrCode,
  MoveDownRight,
  MoveUpRight,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
  Upload,
  Wallet,
} from "lucide-react";
import OverviewCard from "../../components/card/OverviewCard";
import BalanceCard from "../../components/card/BalanceCard";
import Dropdown from "../../components/input/dropdown";
import { useState } from "react";
import IconLabelButton from "../../components/button/IconLabelButton";

function Filter() {
  const [monthFilter, setMonthFilter] = useState("february");
  const [locationFilter, setLocationFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("2026");

  return (
    <div className="grid p-5 grid-cols-2 md:grid-cols-4 gap-5 rounded-2xl border-1 border-light-gray shadow-sm items-end">
      <Dropdown
        value={locationFilter}
        onChange={setLocationFilter}
        options={[
          {
            label: "Semua Lokasi",
            value: "all",
          },
          {
            label: "Fresh Laundry",
            value: "fresh",
          },
        ]}
      />
      <Dropdown
        value={monthFilter}
        onChange={setMonthFilter}
        options={[
          {
            label: "Januari",
            value: "january",
          },
          {
            label: "Februari",
            value: "february",
          },
          {
            label: "Maret",
            value: "march",
          },
        ]}
      />
      <Dropdown
        value={yearFilter}
        onChange={setYearFilter}
        options={[
          {
            label: "2027",
            value: "2027",
          },
          {
            label: "2026",
            value: "2026",
          },
          {
            label: "2025",
            value: "2025",
          },
        ]}
      />
      <IconLabelButton label={"Export Excel"} Icon={Upload} />
    </div>
  );
}

function Overview() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
      <OverviewCard
        label={"Pemasukan"}
        Icon={TrendingUp}
        TagIcon={MoveUpRight}
        tagLabel="+12.5%"
        value={"Rp. 14.000.000"}
        color={"green"}
      />
      <OverviewCard
        label={"Pengeluaran"}
        Icon={TrendingDown}
        TagIcon={MoveDownRight}
        tagLabel="-10.25%"
        value={"Rp. 10.000.000"}
        color={"red"}
      />
      <OverviewCard
        label={"Untung Rugi"}
        Icon={ChartColumn}
        tagLabel="Profit"
        value={"Rp. 2.000.000"}
        color={"blue"}
      />
      <OverviewCard
        label={"Jumlah Transaksi"}
        Icon={ShoppingCart}
        tagLabel="Bulan ini"
        value={"212"}
        color={"purple"}
        unit="Transaksi"
      />
    </div>
  );
}

function Balance() {
  return (
    <div className="flex flex-col p-5 gap-5 rounded-2xl border-1 border-light-gray">
      <div className="gap-2">
        <h5>Saldo Akun</h5>
        <p>Pendapatan per metode pembayaran bulan Februari 2026</p>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5">
        <BalanceCard
          Icon={LucideQrCode}
          balanceSource={"QRIS"}
          balanceAmount={"Rp. 52.000.300"}
          transactionAmount={"453"}
          color={"purple"}
        />
        <BalanceCard
          Icon={Landmark}
          balanceSource={"BCA"}
          balanceAmount={"Rp. 52.000.300"}
          transactionAmount={"453"}
          color={"blue"}
        />{" "}
        <BalanceCard
          Icon={Landmark}
          balanceSource={"Mandiri"}
          balanceAmount={"Rp. 52.000.300"}
          transactionAmount={"453"}
          color={"yellow"}
        />{" "}
        <BalanceCard
          Icon={Banknote}
          balanceSource={"Cash"}
          balanceAmount={"Rp. 52.000.300"}
          transactionAmount={"453"}
          color={"green"}
        />{" "}
        <BalanceCard
          Icon={Wallet}
          balanceSource={"Dana"}
          balanceAmount={"Rp. 52.000.300"}
          transactionAmount={"453"}
          color={"blue"}
        />{" "}
      </div>
    </div>
  );
}

export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-5">
      {/* Filter */}
      <Filter />
      {/* Overview */}
      <Overview />
      {/* Balance */}
      <Balance />
    </div>
  );
}
