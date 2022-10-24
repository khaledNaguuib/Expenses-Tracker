import react, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const DUMMY_EXPENSES = [
    {
      id: "E1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    {
      id: "E2",
      title: "Internet Bill",
      amount: 250,
      date: new Date(2021, 5, 1),
    },
    { id: "E3", title: "Phone Bill", amount: 120, date: new Date(2021, 9, 25) },
    {
      id: "E4",
      title: "Car Insurance",
      amount: 299.99,
      date: new Date(2021, 4, 10),
    },
    {
      id: "E5",
      title: "Internet bill",
      amount: 349.99,
      date: new Date(2022, 1, 20),
    },{
      id: "E6",
      title: "Birthday Gift",
      amount: 300,
      date: new Date(2022, 3, 25),
    },{
      id: "E7",
      title: "New Laptop",
      amount: 950,
      date: new Date(2022, 5, 11),
    },
    {
      id: "E8",
      title: "New Phone",
      amount: 799.99,
      date: new Date(2022, 8, 15),
    },
    {
      id: "E9",
      title: "New TV",
      amount: 1200,
      date: new Date(2022, 6, 17),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    // updating state based on an older snapshot
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}
export default App;
