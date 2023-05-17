import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import categories from "./categories";

function App() {
  // Dummy array of expenses
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 50, category: "Balling" },
    { id: 2, description: "bbb", amount: 50, category: "Feeding" },
    { id: 3, description: "ccc", amount: 50, category: "Transportation" },
  ]);

  // State to manage the filter
  const [selectedCategory, setSelectedCategory] = useState("");

  // Check if an optiion is selected then modify the expenses array
  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(newExpense) =>
            setExpenses([
              ...expenses,
              { ...newExpense, id: expenses.length + 1 },
            ])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
