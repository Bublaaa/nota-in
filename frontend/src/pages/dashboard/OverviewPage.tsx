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
  Wallet,
} from "lucide-react";
import OverviewCard from "../../components/card/OverviewCard";
import BalanceCard from "../../components/card/BalanceCard";

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
      {/* Overview */}
      <Overview />
      {/* Balance */}
      <Balance />
    </div>
  );
}
