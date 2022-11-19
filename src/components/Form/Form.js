import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <form className="form" onSubmit={props.getWeather}>
      <input
        type="text"
        placeholder="city"
        name="city"
      />
      <input
        type="text"
        placeholder="country"
        name="country"
      />
      <div>
        <button>Get Weather</button>
      </div>
    </form>
  );
};

export default Form;
