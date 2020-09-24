import React from 'react'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Buybutton from '../components/BuyButton'
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";




function detail() {
   const [value, setValue] = React.useState("female");

   const handleChange = (event) => {
     setValue(event.target.value);
   };
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
        <Buybutton />
        
      </div>
    );
}

export default detail
