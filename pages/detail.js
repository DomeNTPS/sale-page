import React from 'react'
import Button from "@material-ui/core/Button";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
  withStyles,
  styled,
} from "@material-ui/core/styles";
import Buybutton from '../components/BuyButton'


function detail() {
   const [value, setValue] = React.useState("female");

   const useStyles = makeStyles((theme) => ({
     contactbutton: {
       background: "#fff",
       color: "#339a65",
       borderRadius: "6px",
       border: "2px solid #339a65",
       fontSize: 20,
       padding: "10px 55px",
     },
   }));

   const handleChange = (event) => {
     setValue(event.target.value);
   };
   const classes = useStyles();
    return (
      <div className="detailall">
        <div className="detail-head">รายละเอียด</div>
        <div className="detail-subhead">M0 series</div>
        <div className="detail-detail">
          เครื่องตรวจสอบคุณภาพข้าวด้วยเทคโนโลยีปัญญาประดิษฐ์ (AI)
        </div>
        <div className="detail-size">
          ขนาดเครื่อง &nbsp; &nbsp; &nbsp;{" "}
          <div style={{ color: "#339A65", fontSize: "24px" }}>28x52.9x24</div>{" "}
          &nbsp; &nbsp; &nbsp; เซนติเมตร
        </div>
        <div className="detail-weight">
          น้ำหนักเครื่อง &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <div
            style={{
              color: "#339A65",
              fontSize: "24px",
              marginLeft: 30,
              marginRight: 30,
            }}
          >
            2
          </div>{" "}
          &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; กิโลกรัม
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div className="detail-box"></div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div className="detail-buybutton">
            <Buybutton />
          </div>
          <div className="detail-contactbutton">
            <Button className={classes.contactbutton}>ติดต่อเรา</Button>
          </div>
        </div>
      </div>
    );
}

export default detail
