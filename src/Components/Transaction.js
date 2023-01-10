import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { ContextData } from "../Provider/Provider";
import { dateFormatter } from "../Functions/functions";
import "./Transaction.css";
const API = process.env.REACT_APP_API_URL;

export default function Transaction() {
  const { id } = useParams();
  const { handleDelete } = useContext(ContextData);
  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/transactions/${id}`)
      .then((res) => setTransaction(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div id="transaction">
      {transaction.id && (
        <section>
          <h3>{transaction.item_name}</h3>
          <br />
          <p>
            <span>Amount: </span>
            {transaction.amount}
            <span className="smaller">USD</span>
          </p>
          <p>
            <span>Date: </span>
            {dateFormatter(transaction.date)}
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
      <div id="details-buttons">
        <Link to="/transactions">Back</Link>
        <Link to={`/transactions/${id}/edit`}>Edit</Link>
        <Link onClick={() => handleDelete(id)}>Delete</Link>
      </div>
    </div>
  );
}
