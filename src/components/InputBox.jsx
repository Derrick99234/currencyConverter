import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  setlectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId();
  return (
    <>
      <div className={`${className}`}>
        <div>
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            type="number"
            placeholder="Amount"
            disabled={amountDisabled}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
        <div>
          <p>Currency Type</p>
          <select
            value={setlectedCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisabled}
          >
            {currencyOptions.map((currency) => (
              <option value={currency}>{currency}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
