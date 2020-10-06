import React from 'react'
import Button from "@material-ui/core/Button";
import {
  makeStyles,
} from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  buybutton: {
    background: "#339a65",
    color: "#fff",
    borderRadius: 6,
    border: "6px",
    fontFamily: "Prompt",
    fontSize: 20,
    padding: "10px 55px",
    [theme.breakpoints.down("md")]: {
      marginTop: 10,
      width: 200,
      margin: "auto",
      justifySelf: "center",
    },
  },
}));

function BuyButton() {
  const classes = useStyles();
    return (
      <div>
        <Link href="/buy">
          <Button className={classes.buybutton}>ซื้อสินค้า</Button>
        </Link>
      </div>
    );
}

export default BuyButton
