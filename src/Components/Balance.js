import { useContext } from "react";
import { ContextData } from "../Provider/Provider";
import { amountFormatter } from "../Functions/functions";
import "./Balance.css";

export default function BankTotal() {
  const { balance, balanceClass } = useContext(ContextData);

  return (
    <div id="total">
      <h2>
        Account Balance: <span className={balanceClass}>{amountFormatter(balance)}</span> 
      </h2>
    </div>
  );
}
