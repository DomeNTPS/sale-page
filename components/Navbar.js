import React from 'react'
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  nav: {
    background: "#339a65",
    color: "#fff",
    borderRadius: 3,
    fontFamily: "Prompt",
    fontSize: 20,
    width: 180,
    padding: "20px 30px",
  },
}));

function Navbar() {

  const classes = useStyles();
    return (
        <div className="navdiv">
          <img src="/M0_SERIES_Label.svg" style={{marginLeft: 30}}/>
          <div className="navbar">
            <Link href="/">
              <Button className={classes.nav}>หน้าแรก</Button>
            </Link>
            <Link href="/detail">
              <Button className={classes.nav}>รายละเอียด</Button>
            </Link>
            <Link href="/buy">
              <Button className={classes.nav}>ซื้อสินค้า</Button>
            </Link>
            <Link href="/services">
              <Button className={classes.nav}>บริการ</Button>
            </Link>
          </div>
        </div>
    );
}

export default Navbar

