import React from 'react'
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

function buy() {
    return (
      <div>
        <div>ลงทะเบียนเพื่อทำการสั่งซื้อ</div>
        <StyledTextField />
      </div>
    );
}

export default buy

const StyledTextField = styled(TextField)`
  &&& {
    width: 360px;
    height: 50px;
    padding: 20px 0;
    margin: auto;
    margin-top: 10px;
    background-color: "#ebf4e5";
    border-color: red;
  }
`;