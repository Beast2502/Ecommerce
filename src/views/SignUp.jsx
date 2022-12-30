import React from "react";
import { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const onSubmitOTP = () => {
    console.log(otp.join(""), "Check");
  };
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <p>Enter the OTP sent to you to verify your idenity</p>
          <div>
            {otp.map((data, index) => {
              return (
                <input
                  className="otp-field"
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
          </div>
          <button onClick={() => onSubmitOTP()}>OnClick</button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
