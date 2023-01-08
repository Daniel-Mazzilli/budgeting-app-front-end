import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import TransactionsPage from "../Pages/TransactionsPage";
import TransactionPage from "../Pages/TransactionPage";
import TransactionFormPage from "../Pages/TransactionFormPage";
import FourOFourPage from "../Pages/FourOFourPage";

export default function RouteComponent() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="transactions">
          <Route index element={<TransactionsPage />} />
          <Route path=":id">
            <Route index element={<TransactionPage />} />
            <Route path="edit" element={<TransactionFormPage />} />
          </Route>
          <Route path="new" element={<TransactionFormPage />} />
        </Route>
        <Route path="not-found" element={<FourOFourPage />} />
      </Route>
      <Route path="*" element={<Navigate to="not-found" />} />
    </Routes>
  );
}
