import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
function App() {
  // Dummy array of expenses
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Savings", amount: 50, category: "December balling" },
    { id: 2, description: "bbb", amount: 50, category: "December balling" },
    { id: 3, description: "ccc", amount: 50, category: "December balling" },
    { id: 4, description: "ddd", amount: 50, category: "December balling" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
