import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
const API = process.env.REACT_APP_API_URL;

export const ContextData = createContext();

function Provider({ children }) {
  const [balance, setBalance] = useState(0);
  const [balanceClass, setBalanceClass] = useState("");
  const [trigger, setTrigger] = useState(1);
  const [transactions, setTransactions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => setTransactions(res.data))
      .catch((err) => console.log(err));
  }, [trigger]);

  useEffect(() => {
    const total = transactions.reduce((acc, e) => acc + e.amount, 0);
    setBalance(total);
    total >= 0
      ? total > 1000
        ? setBalanceClass("inGreen")
        : setBalanceClass("inNeutral")
      : setBalanceClass("inRed");
  }, [transactions]);

  const handleDelete = (id) => {
    axios
      .delete(`${API}/transactions/${id}`)
      .then(() => {
        navigate(`/transactions`);
        setTrigger(-trigger);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <ContextData.Provider
        value={{
          transactions,
          balance,
          balanceClass,
          setTrigger,
          trigger,
          handleDelete,
        }}
      >
        <Nav />
        <Footer />
        {children}
      </ContextData.Provider>
    </div>
  );
}

export default Provider;
