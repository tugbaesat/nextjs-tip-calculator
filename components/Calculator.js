import React, { useState } from "react";

const Calculator = () => {
  // TODO: start coding here!
  const [tipPercentage, setTipPercentage] = useState(0);
  const [billAmount, setBillAmount] = useState(0);
  const [numOfPeople, setNumOfPeople] = useState(1);
  const [showNumOfPeopleError, setShowNumOfPeopleError] = useState(false);

  const handleClickReset = () => {
    setTipPercentage(0);
    setBillAmount(0);
    setNumOfPeople(1);
  };

  const handleBillInput = (e) => {
    setBillAmount(e.target.value);
  };

  const handleNumOfPeopleInput = (e) => {
    const value = e.target.value;
    if (value > 0) {
      setNumOfPeople(value);
    } else {
      setShowNumOfPeopleError(true);
    }
  };

  const handleTipPercentageInput = (e) => {
    setTipPercentage(e.target.value);
  };

  const handleTipPercentageClick = (e) => {
    setTipPercentage(e.target.innerText.trim().slice(0, -1));
  };

  const calculateTotalAmount = () => {
    let tipAmountValue = Number(
      (billAmount * tipPercentage) / (100 * numOfPeople)
    );
    let totalAmountValue = (
      Number(billAmount / numOfPeople) + tipAmountValue
    ).toFixed(2);
    return (
      <strong className="strong-text card-price-value" id="totalPrice">
        ${totalAmountValue}
      </strong>
    );
  };

  const calculateTipAmount = () => {
    let tipAmountValue = Number(
      (billAmount * tipPercentage) / (100 * numOfPeople)
    ).toFixed(2);

    return (
      <strong className="strong-text card-price-value" id="tipAmount">
        ${tipAmountValue}
      </strong>
    );
  };

  return (
    <main>
      <img
        src="./icons/logo.svg"
        className="logo"
        alt="Splitter logo. 'SPLI' on one line and 'TTER' on another to indicate splitting."
      />
      <section className="card">
        <div className="card-left">
          <div className="input-group" id="totalBillGroup">
            <div className="input-label-container">
              <label className="body-text input-label" htmlFor="totalBill">
                Bill
              </label>
            </div>
            <input
              type="number"
              className="body-l-text input-field"
              placeholder="0"
              name="Total bill value"
              id="totalBill"
              onChange={handleBillInput}
              value={billAmount === 0 ? " " : billAmount}
            />
          </div>

          <div className="input-group" id="totalTipPercentageGroup">
            <div className="input-label-container">
              <label className="body-text input-label">Select Tip %</label>
            </div>
            <div className="input-tips-container">
              <button
                className="body-l-text input-tip"
                id="tip5"
                onClick={handleTipPercentageClick}
              >
                5%
              </button>
              <button
                className="body-l-text input-tip"
                id="tip10"
                onClick={handleTipPercentageClick}
              >
                10%
              </button>
              <button
                className="body-l-text input-tip"
                id="tip15"
                onClick={handleTipPercentageClick}
              >
                15%
              </button>
              <button
                className="body-l-text input-tip"
                id="tip25"
                onClick={handleTipPercentageClick}
              >
                25%
              </button>
              <button
                className="body-l-text input-tip"
                id="tip50"
                onClick={handleTipPercentageClick}
              >
                50%
              </button>
              <input
                type="number"
                className="body-l-text input-field"
                placeholder="Custom"
                id="totalTipPercentage"
                onChange={handleTipPercentageInput}
                value={tipPercentage === 0 ? " " : tipPercentage}
              />
            </div>
          </div>

          <div className="input-group" id="numberOfPeopleGroup">
            <div className="input-label-container">
              <label className="body-text input-label" htmlFor="numberOfPeople">
                Number of People
              </label>
              <small
                className={`body-text input-error ${
                  showNumOfPeopleError ? "" : "hidden"
                }`}
                id="numberOfPeopleError"
              >
                Can&apos;t be zero!
              </small>
            </div>
            <input
              type="number"
              className="body-l-text input-field"
              placeholder="0"
              name="Number of people"
              id="numberOfPeople"
              onChange={handleNumOfPeopleInput}
              value={numOfPeople === 1 ? " " : numOfPeople}
            />
          </div>
        </div>
        <div className="card-right">
          <section className="card-price-container">
            <div>
              <b className="body-text card-price-title">Tip Amount</b>
              <p className="body-s-text card-price-subtitle">/ person</p>
            </div>
            {calculateTipAmount()}
          </section>
          <section className="card-price-container">
            <div>
              <b className="body-text card-price-title">Total</b>
              <p className="body-s-text card-price-subtitle">/ person</p>
            </div>
            {calculateTotalAmount()}
          </section>
          <button
            className="btn btn-primary btn-reset"
            onClick={handleClickReset}
          >
            Reset
          </button>
        </div>
      </section>
    </main>
  );
};

export default Calculator;
