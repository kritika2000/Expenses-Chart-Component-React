import React from "react";

function Price({ totalPrice }) {
  return (
    <div className="cost--container">
      <div id="price--container">
        <div className="title">Total this month</div>
        <div className="cost">{`$${totalPrice}`}</div>
      </div>
      <div className="value--container">
        <div>2.4%</div>
        <div>from last month</div>
      </div>
    </div>
  );
}

export default Price;
