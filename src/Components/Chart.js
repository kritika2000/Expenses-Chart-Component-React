import React from "react";

function Chart({ data }) {
  return (
    <div className="chart--container">
      {data.map((d) => {
        return (
          <div className="bar">
            <div
              style={{
                height: `${d.amount / 7.5}em`,
                backgroundColor: d.day === "wed" && "hsl(186, 34%, 60%)",
              }}
            ></div>
            <div>{d.day}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Chart;
