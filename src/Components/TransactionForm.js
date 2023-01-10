import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContextData } from "../Provider/Provider";
import axios from "axios";
import "./TransactionForm.css";
const API = process.env.REACT_APP_API_URL;

export default function TransactionForm() {
  const { id } = useParams();
  const { setTrigger, trigger } = useContext(ContextData);
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    from: "",
    category: "",
    date: "",
  });

  useEffect(() => {
    if (id !== undefined) {
      axios
        .get(`${API}/transactions/${id}`)
        .then((res) => setTransaction(res.data))
        .catch((err) => console.log(err));
    }
  }, [id]);

  const handleChange = (event) => {
    let val = event.target.value;
    if (event.target.id === "amount" && val) {
      val = +val;
    }
    setTransaction({ ...transaction, [event.target.id]: val });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!id) {
      axios
        .post(`${API}/transactions`, transaction)
        .then(() => {
          navigate("/transactions");
          setTrigger(-trigger);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .put(`${API}/transactions/${id}`, transaction)
        .then(() => {
          navigate(`/transactions/${id}`);
          setTrigger(-trigger);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item_name">Name: </label>
      <input
        id="item_name"
        type="text"
        value={transaction.item_name}
        onChange={handleChange}
        required
      />
      <label htmlFor="amount">Amount: </label>
      <input
        id="amount"
        type="number"
        value={transaction.amount}
        onChange={handleChange}
        required
      />
      <label htmlFor="from">From: </label>
      <input
        id="from"
        type="tex"
        value={transaction.from}
        onChange={handleChange}
        required
      />
      <label htmlFor="category">Category: </label>
      <select
        id="category"
        value={transaction.category}
        onChange={handleChange}
        required
      >
        <option value=""></option>
        <option value="Deposit">Deposit</option>
        <option value="Expense">Expense</option>
        <option value="Income">Income</option>
        <option value="Profit">Profit</option>
        <option value="Purchase">Purchase</option>
        <option value="Subscription">Subscription</option>
        <option value="Taxes">Taxes</option>
        <option value="Travel and Leisure">Travel and Leisure</option>
        <option value="Utility Bills">Utility Bills</option>
      </select>
      <label htmlFor="date">Date: </label>
      <input
        id="date"
        type="date"
        value={transaction.date}
        onChange={handleChange}
        required
      />
      <input
        type="submit"
        id="submit"
        value={id ? "SUBMIT CHANGES" : "CREATE NEW ITEM"}
      />
    </form>
  );
}
