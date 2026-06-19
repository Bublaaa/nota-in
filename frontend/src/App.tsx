import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
function App() {
  return (
    <div className="h-screen w-full bg-white overflow-hidden">
      <Routes>
        <Route>
          <Route path="/" element={<DashboardLayout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
