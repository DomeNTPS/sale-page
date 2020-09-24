import Head from 'next/head'
import { Fade } from "react-slideshow-image";
import Button from "@material-ui/core/Button";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
  withStyles,
} from "@material-ui/core/styles";

const fadeImages = ["/M0.png", "/M0.png"];

const useStyles = makeStyles((theme) => ({
  button: {
    background: "#fff",
    color: "#339a65",
    borderRadius: "6px",
    border: "2px solid #339a65",
    fontSize: 20,
    padding: "10px 55px",
    marginLeft: 40
  },
}));


export default function Home() {
  const classes = useStyles();
  return (
    <div className="container2">
      <Head>
        <title>Sale page</title>
      </Head>
      <div className="slide-contain">
        <Fade>
          <div className="each-fade">
            <div>
              <img src={fadeImages[0]} />
            </div>
            <p>M0 Series</p>
          </div>
          <div className="each-fade">
            <p>M0 series</p>
            <div>
              <img src={fadeImages[1]} />
            </div>
          </div>
        </Fade>
      </div>
      <div className="M0">
        <div className="M0-head">M0 Series</div>
        <div className="M0-detail">
          เครื่องตรวจสอบคุณภาพข้าวด้วยเทคโนโลยีปัญญาประดิษฐ์ (AI)
        </div>
        <div className="M0-detail-time">ใช้เวลาตรวจสอบเพียง 1 นาที</div>
        <div className="M0-detail-acc">แม่นยำถึง 93 %</div>
        <div className="M0-detail-price">
          ราคาเริ่ม&nbsp;&nbsp;60,000 บาท / ปีแรก <br /> &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; 30,000 บาท / ปีแรก
        </div>
      </div>
      <div style={{ justifyContent: "center", marginLeft: 600, marginTop: 90 }}>
        <Button className={classes.button}>ซื้อสินค้า</Button>
        <Button className={classes.button}>รายละเอียด</Button>
        <Button className={classes.button}>บริการ</Button>
      </div>
    </div>
  );
}
