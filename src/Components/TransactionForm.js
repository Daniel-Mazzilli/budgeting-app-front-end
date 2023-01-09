import "./TransactionForm.css";

export default function TransactionForm() {
  return (
    <form>
      <label htmlFor="item-name">Item Name: </label>
      <input type="text" id="item-name" />
      <label htmlFor="amount">Amount: </label>
      <input type="number" id="amount" />
      <label htmlFor="from">From: </label>
      <input type="tex" id="from" />
      <label htmlFor="category">Category: </label>
      <select id="category">
        <option value="">choose a category</option>
        <option value="">Income</option>
        <option value="">Entertainment Expense</option>
      </select>
      <label htmlFor="date">Date: </label>
      <input type="date" id="date" />
    </form>
  );
}
