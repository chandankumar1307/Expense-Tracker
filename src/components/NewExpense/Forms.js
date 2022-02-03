import { useState } from "react/cjs/react.development";
import "./Forms.css";

const Forms = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const TitleHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const AmountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const DateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const NewExpense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveData(NewExpense);

    setEnteredDate("");
    setEnteredTitle("");
    setEnteredAmount("");
    // console.log(NewExpense);
  };
  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={enteredTitle}
            onChange={TitleHandler}
            type="text"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            onChange={AmountHandler}
            type="number"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input value={enteredDate} onChange={DateHandler} type="date"></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default Forms;
