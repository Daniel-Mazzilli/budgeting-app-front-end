import { useState, useEffect } from "react";
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
      <h3>Index</h3>
      <ul>
        {transactions &&
          transactions.map((transaction) => {
            return <li key={transaction.id}>{transaction.item_name}</li>;
          })}
      </ul>
    </div>
  );
}
