import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
    <div>
      <ul>
        {transactions &&
          transactions.map((transaction) => {
            return (
              <li key={transaction.id}>
                <Link to={`/transactions/${transaction.id}`}>
                  {transaction.item_name} - {transaction.amount}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
