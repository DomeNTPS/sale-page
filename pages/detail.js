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
          ขนาดเครื่อง &nbsp; &nbsp; &nbsp; 23x45x50 &nbsp; &nbsp; &nbsp;
          เซนติเมตร
        </div>
        <div className="detail-weight">
          นำ้หนักเครื่อง &nbsp; &nbsp; &nbsp; &nbsp; 100 &nbsp; &nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; กิโลกรัม
        </div>
        <div className="detail"></div>
        <div style={{ display: "flex" }}>
          <Buybutton />
          <div className="detail-contactbutton">
            <Button className={classes.contactbutton}>ติดต่อเรา</Button>
          </div>
        </div>
      </div>
    );
}

export default detail
