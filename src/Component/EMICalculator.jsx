import React, { useState } from "react";
import "./style.css";

export const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emi, setEMI] = useState(0);

  const calculateEMI = () => {
    const principal = loanAmount;
    const rateOfInterest = interestRate / 12 / 100;
    const timePeriod = loanTenure * 12;

    const emiValue =
      (principal * rateOfInterest * Math.pow(1 + rateOfInterest, timePeriod)) /
      (Math.pow(1 + rateOfInterest, timePeriod) - 1);

    setEMI(emiValue.toFixed(2));
  };
  const handlePrincipalChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setLoanTenure(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const Reset = (e) => {
    setLoanAmount("");
    setInterestRate("");
    setLoanTenure("");
    setEMI(0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div>
            <h1
              style={{
                textAlign: "center",

                fontWeight: "500",
                marginTop: "10px",
                color: "Black",
              }}
            >
              <span style={{ color: "gray", fontWeight: "500" }}>
                EMI Calculator !
              </span>
            </h1>
            <label>Loan Amount (₹) : </label> <br />
            <input
              type="number"
              value={loanAmount}
              onChange={handlePrincipalChange}
            />
          </div>
          <div className="container">
            <label>Interest Rate (%) :</label>
            <br />
            <input
              type="number"
              value={interestRate}
              onChange={handleRateChange}
            />
          </div>

          <div className="container">
            <label>Loan Tenure (years) :</label>
            <br />
            <input
              type="number"
              value={loanTenure}
              onChange={handleTimeChange}
            />
          </div>

          <div className="btn">
            <button onClick={calculateEMI}>Calculate</button>
            <button className="reset" onClick={Reset}>
              Reset
            </button>
          </div>

          <div className="output">EMI Amount: ₹ {emi}</div>
        </div>
      </form>
    </div>
  );
};
