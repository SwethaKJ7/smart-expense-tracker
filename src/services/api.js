import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const addExpense = (expense) => {
  return api.post("/expenses", expense);
};

export const getExpenses = () => {
  return api.get("/expenses");
};
