import React from 'react'
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: "#339a65",
        color: "#fff",
        borderRadius: 3,
        border: 5,
        // borderColor: "#339a65",
        fontSize: 20,
        padding: "0 30px",
        // width: 184,
        // height: 56,
      },
    },
  },
});

function BuyButton() {
    return (
      <div className="buybutton">
        <ThemeProvider theme={theme}>
          <Button>ซื้อสินค้า</Button>
        </ThemeProvider>
      </div>
    );
}

export default BuyButton
