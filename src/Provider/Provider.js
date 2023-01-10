import { useState, useEffect, createContext } from "react";
import axios from "axios";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
const API = process.env.REACT_APP_API_URL;

export const ContextData = createContext();

function Provider({ children }) {
  const [balance, setBalance] = useState(0);
  const [balanceClass, setBalanceClass] = useState("");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => {
        setTransactions(res.data);
        const total = res.data.reduce((acc, e) => acc + e.amount, 0);
        setBalance(total);
        total < 0 ? setBalanceClass("inRed") : setBalanceClass("inGreen");
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ContextData.Provider value={{ transactions, balance, balanceClass }}>
        <Nav />
        <Footer />
        {children}
      </ContextData.Provider>
    </div>
  );
}

export default Provider;
