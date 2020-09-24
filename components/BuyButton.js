import React from 'react'
import Button from "@material-ui/core/Button";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
  withStyles,
  styled,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buybutton: {
    background: "#339a65",
    color: "#fff",
    borderRadius: 3,
    border: "6px",
    fontSize: 20,
    padding: "10px 55px",
  },
}));

function BuyButton() {
  const classes = useStyles();
    return (
      <div className="buybutton">
          <Button className={classes.buybutton}>ซื้อสินค้า</Button>
      </div>
    );
}

export default BuyButton
