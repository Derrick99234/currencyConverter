import { useState } from "react";
import { InputBox } from "./components/index";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function CurrencyConverter() {
  const [amount, setAmount] = useState(3);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("ngn");
  const [convertedAmount, setCovertedAmount] = useState(0);

  // const currencyInfo = useCurrencyInfo(from);
  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const convert = () => {
    setCovertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);

    setCovertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <>
      <div style={{ backgroundColor: "crimson" }}>
        <div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div>
                <InputBox
                  label="from"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  setlectedCurrency={from}
                />
              </div>
              <div>
                <button onClick={swap}>Swap</button>
              </div>
              <div>
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  amountDisabled
                  onCurrencyChange={(currency) => setTo(currency)}
                  setlectedCurrency={to}
                />
              </div>
              <button type="submit">Convert</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrencyConverter;
