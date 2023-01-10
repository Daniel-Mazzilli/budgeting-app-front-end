import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Transactions.css";
const API = process.env.REACT_APP_API_URL;

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => setTransactions(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="unordered-list">
      <ul>
        {transactions &&
          transactions.map((transaction) => {
            return (
              <li key={transaction.id}>
                <p>{transaction.date}</p>
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
