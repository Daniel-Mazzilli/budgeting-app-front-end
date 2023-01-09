import { useState } from "react";
import "./TransactionForm.css";

export default function TransactionForm() {
  const [transaction, setTransaction] = useState({
    itemName: "",
    amount: 0,
    from: "",
    category: "",
    date: "",
  });

  const handleChange = (event) => {
    let val = event.target.value;
    if (event.target.id === "amount" && val) {
      val = +val;
    }
    setTransaction({ ...transaction, [event.target.id]: val });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="itemName">Item Name: </label>
      <input
        id="itemName"
        type="text"
        value={transaction.itemName}
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
        <option value="">choose a category</option>
        <option value="Income">Income</option>
        <option value="Entertainment Expense">Entertainment Expense</option>
        <option value="Exercise Expense">Exercise Expense</option>
      </select>
      <label htmlFor="date">Date: </label>
      <input
        id="date"
        type="date"
        value={transaction.date}
        onChange={handleChange}
        required
      />
      <input type="submit" id="submit" value="SUBMIT" />
    </form>
  );
}
