import { useContext } from "react";
import { ContextData } from "../Provider/Provider";
import "./Balance.css";

export default function BankTotal() {
  const { balance, balanceClass } = useContext(ContextData);

  return (
    <div id="total">
      <h2>
        Account Balance: <span className={balanceClass}>{balance} <span>USD</span></span> 
      </h2>
    </div>
  );
}
