import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background-color: #f5f5f5;
  width: 50px;
  height: 50px;
  padding: 50px;
  margin: 5px;
  font-size: 2rem;
  box-shadow: 1px 1px 10px 1px #6a197d;
  border-radius: 15px;
  display:flex;
  justify-content: center;
  align-items: center;
  
`

function DrumPad ({text}) {
  return(
    <Container>
      {text}
    </Container>
  )
}

export default DrumPad;