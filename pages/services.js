import React from 'react'
import Buybutton from "../components/BuyButton";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
  withStyles,
  styled,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  contactbutton: {
    background: "#fff",
    color: "#339a65",
    borderRadius: "6px",
    border: "2px solid #339a65",
    fontSize: 20,
    padding: "10px 55px",
    marginLeft: 50,
    [theme.breakpoints.down("md")]: {
      marginTop: 30,
      width: 200,
      margin: "auto",
    },
  },
  buybutton: {
    background: "#339a65",
    color: "#fff",
    borderRadius: "6px",
    border: "2px solid #339a65",
    fontSize: 20,
    padding: "10px 55px",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      marginTop: 10,
      width: 200,
      margin: "auto",
      justifyContent: "center",
    },
  },
}));

function services() {
  const classes = useStyles();
    return (
      <div className="service-container">
        <div className="service">บริการ</div>
        <div className="customer-service">Customer Service</div>
        <div className="service-icon">
          <div className="icon">
            <img
              src="/dashboard.svg"
              alt=""
              height={230}
              style={{ marginLeft: 90, marginTop: 40 }}
            />
            <div className="icon-text">Dashboard for Monitoring</div>
          </div>
          <div className="icon">
            <img
              src="/result.svg"
              alt=""
              height={230}
              style={{ marginLeft: 90, marginTop: 40 }}
            />
            <div className="icon-text">Export results with Excel/PDF file</div>
          </div>
          <div className="icon">
            <img
              src="/callservice.svg"
              alt=""
              height={230}
              style={{ marginLeft: 90, marginTop: 40 }}
            />
            <div className="icon-text">24 hour support</div>
          </div>
        </div>
        <div className="service-button">
          <Button className={classes.buybutton}>ซื้อสินค้า</Button>
          <Button className={classes.contactbutton}>ติดต่อเรา</Button>
        </div>
      </div>
    );
}

export default services
