import { useContext } from "react";
import { ContextData } from "../Provider/Provider";
import { Link } from "react-router-dom";
// import axios from "axios";
import { dateFormatter, amountFormatter } from "../Functions/functions";
import "./Transactions.css";
const API = process.env.REACT_APP_API_URL;

export default function Transactions() {
  const { transactions } = useContext(ContextData);

  const balanceProgress = (arr, index) => {
    let balance = 0;
    arr.forEach((e, i) => {
      if (i <= index) {
        balance += e.amount;
      }
    });
    return balance;
  };

  return (
    <div id="unordered-list">
      <ul>
        <li>
          <h3>Date</h3>
          <h3>Name</h3>
          <h3 className="amount-balance">Amount</h3>
          <h3 className="amount-balance">Balance</h3>
        </li>
        {transactions &&
          transactions.map((transaction, index) => {
            return (
              <li key={transaction.id}>
                <p>{dateFormatter(transaction.date, "short")}</p>
                <Link to={`/transactions/${transaction.id}`}>
                  <p>{transaction.item_name}</p>
                </Link>
                <p className="amount-balance">{amountFormatter(transaction.amount)}</p>
                <p className="amount-balance">
                  {amountFormatter(balanceProgress(transactions, index))}
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
