import ChartBar from "./ChartBar";
import "./Charts.css";

const Charts = (props) => {
  const values = props.dataPoints.map((points) => points.value);
  const maximumValue = Math.max(...values);
  return (
    <div className="chart">
      {props.dataPoints.map((points) => (
        <ChartBar
          key={points.label}
          value={points.value}
          label={points.label}
          maxValue={maximumValue}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Charts;
