import logo from "./logo.svg";
import "./App.css";
import Balance from "./Components/Balance";
import Chart from "./Components/Chart";
import Price from "./Components/Price";
import Heading from "./Components/Heading";
import data from "./Components/data";

function App() {
  let totalPrice = 0;
  data.map((p) => {
    totalPrice += p.amount;
  });
  return (
    <main className="App">
      <Balance />
      <div className="main--container">
        <Heading />
        <Chart data={data} />
        <hr />
        <Price totalPrice={totalPrice} />
      </div>
    </main>
  );
}

export default App;
