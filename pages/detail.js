import React from 'react'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import BuyButton from '../components/BuyButton'


function detail() {
    return (
      <div>
        <div>รายละเอียด</div>
        <div>M0 series</div>
        <div>เครื่องตรวจสอบคุณภาพข้าวด้วยเทคโนโลยีปัญญาประดิษฐ์ (AI)</div>
        <div>ขนาดเครื่อง 23*45*50 เซนติเมตร</div>
        <div>นำ้หนักเครื่อง 100 กิโลกรัม</div>
        <div className="detail"></div>
        <BuyButton/>
      </div>
    );
}

export default detail
