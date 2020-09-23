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
        border: 0,
        fontSize: 20,
        padding: "0 30px",
      },
    },
  },
});

function BuyButton() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Button>hi</Button>
        </ThemeProvider>
      </div>
    );
}

export default BuyButton
