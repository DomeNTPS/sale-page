import React from 'react'
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

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
  navrespon: {
    background: "rgba(205, 227, 191, 1)",
    color: "#fff",
    borderRadius: 3,
    fontFamily: "Prompt",
    fontSize: 20,
    width: 180,
    padding: "20px 30px",
  },
  menuicon: {
    color: "#fff",
    display: "none",
    fontSize: 35,
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
}));



function Navbar() {

  const [click, setClick] = React.useState(true);

  const handleClick = () => {
    setClick(!click)
    console.log(click)
  }

  const classes = useStyles();
    return (
      <div className="navdiv">
        <img src="/M0_SERIES_Label.svg" className="label" />
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
        <div className="menuicon">
          <IconButton aria-label="nav" onClick={handleClick}>
            <MenuIcon className={classes.menuicon} />
          </IconButton>
        </div>
        <div className="div-ul">
          <ul className={click ? "ul-normal" : "ul-responsive"}>
            <li>
              <Link href="/">
                <Button className={classes.navrespon}>หน้าแรก</Button>
              </Link>
            </li>
            <li>
              <Link href="/detail">
                <Button className={classes.navrespon}>รายละเอียด</Button>
              </Link>
            </li>
            <li>
              <Link href="/buy">
                <Button className={classes.navrespon}>ซื้อสินค้า</Button>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <Button className={classes.navrespon}>บริการ</Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Navbar

