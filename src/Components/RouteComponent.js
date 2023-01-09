import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import TransactionsIndex from "../Pages/TransactionsIndex" 
import NewTransaction from "../Pages/NewTransaction";
import TransactionDetails from "../Pages/TransactionDetails";
import EditTransaction from "../Pages/EditTransaction";
import FourOFour from "../Pages/FourOFour";

export default function RouteComponent() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="transactions">
          <Route index element={<TransactionsIndex />} />
          <Route path=":id">
            <Route index element={<TransactionDetails />} />
            <Route path="edit" element={<EditTransaction />} />
          </Route>
          <Route path="new" element={<NewTransaction />} />
        </Route>
        <Route path="not-found" element={<FourOFour />} />
      </Route>
      <Route path="*" element={<Navigate to="not-found" />} />
    </Routes>
  );
}
