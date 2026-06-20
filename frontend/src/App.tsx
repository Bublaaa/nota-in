import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import { lazy } from "react";

const ButtonDisplayPage = lazy(() => import("./pages/ButtonDisplayPage"));
function App() {
  return (
    <div className="h-screen w-full bg-white overflow-hidden">
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<ButtonDisplayPage />} />
          {/* <Route path="orders" element={<OrdersPage />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
