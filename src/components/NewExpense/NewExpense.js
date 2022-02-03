import { useState } from "react";
import Forms from "./Forms";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, EditingChange] = useState();
  const ExpenseDataHandler = (expense) => {
    const expenses = {
      ...expense,
      id: Math.random(),
    };
    EditingChange(false);
    props.ExpenseData(expenses);
  };

  const cancelExpenseHandler = () => {
    EditingChange(false);
  };

  const AddExpenseHandler = () => {
    EditingChange(true);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={AddExpenseHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <Forms
          onSaveData={ExpenseDataHandler}
          onCancel={cancelExpenseHandler}
        ></Forms>
      )}
    </div>
  );
};

export default NewExpense;
