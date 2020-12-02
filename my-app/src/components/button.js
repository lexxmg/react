//import React from 'react';

//import '../css/btn.css';

function Button(props) {
  return (
    <button className="btn" onClick={props.foo}>
      {props.name} {String( props.date )}
    </button>
  );
}

export default Button;
