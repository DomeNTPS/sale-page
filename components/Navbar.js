import React from 'react'
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Link from "next/link";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function Navbar() {

  const theme = createMuiTheme({
    overrides: {
      // Style sheet name ⚛️
      MuiButton: {
        // Name of the rule
        text: {
          // Some CSS
          background: "#fff",
          color: "#339a65",
          borderRadius: 3,
          border: 0,
          fontSize: 20,
          padding: "0 30px",
        },
      },
    },
  });

    return (
      <>
        <div className="navdiv">
          <ThemeProvider theme={theme}>
            <Link href="/">
              <Button>หน้าแรก</Button>
            </Link>
            <Link href="/detail">
              <Button>รายละเอียด</Button>
            </Link>
            <Link href="/buy">
              <Button>ซื้อสินค้า</Button>
            </Link>
            <Link href="/services">
              <Button>บริการ</Button>
            </Link>
          </ThemeProvider>
        </div>
      </>
    );
}

export default Navbar



const NavDiv = styled.div`
  /* position: absolute; */
  width: 100%;
  height: 72px;
  left: 0px;
  top: 0px;
  display: flex;

  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);

  justify-items: flex-end;
  
`;

