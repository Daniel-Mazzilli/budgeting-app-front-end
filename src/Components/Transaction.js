import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Transaction() {
  const { id } = useParams();
  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/transactions/${id}`)
      .then((res) => setTransaction(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
      {transaction.id && (
        <section>
          <h3>{transaction.item_name}</h3>
          <p>
            <span>Amount: </span>
            {transaction.amount}
          </p>
          <p>
            <span>Date: </span>
            {transaction.date}
          </p>
          <p>
            <span>From: </span>
            {transaction.from}
          </p>
          <p>
            <span>Category: </span>
            {transaction.category}
          </p>
          <p>
            <span>Transaction ID: </span>
            {transaction.id}
          </p>
        </section>
      )}
    </div>
  );
}
