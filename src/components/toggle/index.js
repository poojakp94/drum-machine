import React from "react";
// import styled from "styled-components";
import "./style.css";

function ToggleButton({text}) {
  return (
    <div>
      <p>
      {text} 
      </p>
      <span class="toggle-button-wrapper">
      <button role="switch" aria-checked="false" aria-label="show vat off">
        <span class="accessibility">show vat</span>
        <span class="toggle-button-switch"></span>
      </button>
    </span>
    </div>
    
  );
}

export default ToggleButton;
