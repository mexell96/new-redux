import React, { useState } from "react";
import { connect } from "react-redux";
import { addNumber, minusNumber, divisionNumber, multiplicationNumber } from "../actions/counts";

function Calculator(props) {
  const [value, setValue] = useState(0);

  const handleClickAdd = (e) => {
    props.add(value);
  };
  const handleClickMinus = (e) => {
    props.minus(value);
  };
  const handleClickDivision = (e) => {
    props.division(value);
  };
  const handleClickMultiplication = (e) => {
    props.multiplication(value);
  };
  const handleChange = (e) => {
    setValue(+e.target.value);
  };

  const styleButton = {
    background: 'green',
    fontSize: '24px',
  };

  return (
    <div>
      <p style={{border: '1px solid black', width: '200px', margin: '0 auto'}}>Calculator</p>
      <input value={value} onChange={handleChange} type="number" />
      <button style={styleButton} onClick={handleClickAdd}>Add</button>
      <button style={styleButton} onClick={handleClickMinus}>Minus</button>
      <button style={styleButton} onClick={handleClickDivision}>Division</button>
      <button style={styleButton} onClick={handleClickMultiplication}>Multiplication</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (number) => dispatch(addNumber(number)),
    minus: (number) => dispatch(minusNumber(number)),
    division: (number) => dispatch(divisionNumber(number)),
    multiplication: (number) => dispatch(multiplicationNumber(number)),
  };
};

export default connect(null, mapDispatchToProps)(Calculator);
