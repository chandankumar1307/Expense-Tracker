import "./Expense.css";
import ExpensesFilter from "../filter/ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseCharts from "./ExpenseCharts";

const Expense = (props) => {
  const [FilterValue, setFilter] = useState("2021");
  const changeFilterHandler = (Filteryear) => {
    const filter = Filteryear;
    console.log(filter);
    setFilter(filter);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === FilterValue;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          value={FilterValue}
          OnchangingFilter={changeFilterHandler}
        ></ExpensesFilter>
        <ExpenseCharts expenses={filterExpenses} />
        <ExpenseList items={filterExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
