import React from "react";

import "./Input.css";

const Input = (props) => {
  return (
    <>
    <div className="parent">
      <label className="label" id="label">
        Enter your bill amount:
      </label>
      <br />
      <br />
      <input
        className="input1"
        type="number"
        placeholder="Enter your bill amount"
        value={props.value}
        onChange={props.change}
      />
      <hr />
      <br />
      </div>
      <div className="container">
      <span>
        <label className="b">
          <b>How was our sevice?</b>
        </label>
        <select
          className="select"
          value={props.vselect}
          onChange={props.select}
        >
          <option>Please enter your experience</option>
          <option value="Excellent">Excellent</option>
          <option value="Moderate">Moderate</option>
          <option value="Bad">Bad</option>
        </select>

        <input
          type="text"
          className="input2"
          placeholder="Customer name"
          value={props.value2}
          onChange={props.change2}
        />
        <button className="button" onClick={props.click}>
          Add Customer
        </button>
      </span>
      </div>
      <br />
      <br />
      <hr />
    </>
  );
};
export default Input;
