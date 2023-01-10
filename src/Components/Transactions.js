import { useContext } from "react";
import { ContextData } from "../Provider/Provider";
import { Link } from "react-router-dom";
// import axios from "axios";
import { dateFormatter } from "../Functions/functions";
import "./Transactions.css";
const API = process.env.REACT_APP_API_URL;

export default function Transactions() {
  const { transactions } = useContext(ContextData);

  return (
    <div id="unordered-list">
      <ul>
        {transactions &&
          transactions.map((transaction) => {
            return (
              <li key={transaction.id}>
                <p>{dateFormatter(transaction.date)}</p>
                <Link to={`/transactions/${transaction.id}`}>
                  <p>{transaction.item_name}</p>
                </Link>
                <p id="transaction-amount">{transaction.amount}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
