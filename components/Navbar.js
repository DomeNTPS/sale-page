import React from 'react'
import Button from "@material-ui/core/Button";
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
      <div className="navdiv">
        <div className="navbar">
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
      </div>
    );
}

export default Navbar


