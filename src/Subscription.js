import React, { useState } from "react";
import "./Subscription.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function Subscription() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      firstName,
      lastName,
      email,
      password,
      gender
    });
  };

  return (
    <div className="Subscription">
      <div className="header">
        <ul className="Sub-list">
          <li className="Sign">
            <span className="Sub-span">1</span>
            <br />
            <p>Sign Up</p>
          </li>
          <li className="Sub">
            <span className="Sub-span">2</span>
            <br />
            <p>Subscribe</p>
          </li>
        </ul>
      </div>
      <div className="body">
        <h2 className="Sub-head">Select your subscription plan</h2>
        <ul className="Sub-form">
          <li>
            <label className="Sub-month-hide" htmlFor="subscription1">
              <input type="radio" name="subscription" id="subscription1" />
              12 Month Subscription
            </label>
          </li>
          <li>
            <label className="Sub-month" htmlFor="subscription2">
              <input type="radio" name="subscription" id="subscription2" />
              12 Month Subscription
            </label>
          </li>
          <li>
            <label className="Sub-half-month" htmlFor="subscription3">
              <input type="radio" name="subscription" id="subscription3" />6
              Month Subscription
            </label>
          </li>
          <li>
            <label className="Sub-quater-month" htmlFor="subscription3">
              <input type="radio" name="subscription" id="subscription3" />3
              Month Subscription
            </label>
          </li>
        </ul>
        <ul className="Sub-footer">
          <li className="Sub-fee">
            Subscription fee <span className="fee">₹18,500</span>
          </li>
          <li className="Sub-offer">
            Limited time offer <span className="offer">-₹18,401</span>
            <br />
            <FontAwesomeIcon icon={faClock} className="icons" />
            Offer valid till 25th March 2023
          </li>
          <li className="Sub-total">
            Total (Incl. of 18% GST)<span className="total">₹149</span>
          </li>
        </ul>
        <div className="Sub-buttons">
          <button className="Sub-cancel">Cancel</button>
          <button className="Sub-submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
