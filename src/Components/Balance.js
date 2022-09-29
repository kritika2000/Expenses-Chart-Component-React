import React from "react";

function Balance() {
  return (
    <div className="balance--container">
      <div className="price--container">
        <div className="title">My Balance</div>
        <div className="price">$921.48</div>
      </div>
      <div className="circles--container">
        <div className="black--circle"></div>
        <div className="white--circle"></div>
      </div>
    </div>
  );
}

export default Balance;
