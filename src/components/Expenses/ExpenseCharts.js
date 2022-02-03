import Charts from "../Cards/Charts";

const ExpenseCharts = (props) => {
  const ChartdataPoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apr", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "july", value: 0 },
    { label: "Aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const month = expense.date.getMonth();
    ChartdataPoints[month].value += expense.amount;
  }
  //   console.log(ChartdataPoints[1].value);

  return <Charts dataPoints={ChartdataPoints} />;
};

export default ExpenseCharts;
