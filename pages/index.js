import Head from 'next/head'
import { Fade } from "react-slideshow-image";
import Button from "@material-ui/core/Button";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
  withStyles,
} from "@material-ui/core/styles";
import Link from "next/link";
import styled from "styled-components";
import { Label } from '@material-ui/icons';

const fadeImages = ["/Pic03_05.JPG", "/Pic03_02.JPG","/Pic03_08.JPG","/Pic03_04.JPG",];

const useStyles = makeStyles((theme) => ({
  button: {
    background: "#339a65",
    color: "#fff",
    borderRadius: "6px",
    border: "2px solid #339a65",
    fontSize: 20,
    fontFamily: 'Prompt',
    padding: "10px 55px",
    marginLeft: 40,
    [theme.breakpoints.down('md')]:{
      marginTop: 10,
      width: 300,
      margin: 'auto',
    }
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
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[2]} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[3]} />
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
          ราคา&nbsp;&nbsp;<div style={{ color: "#339A65" }}>30,000</div>
          &nbsp; บาท / ปี <br />
        </div>
        <div className="M0-detail-price-30000">
          <div style={{ color: "#339A65" }}>60,000</div> &nbsp; บาทในปีแรก
        </div>
      </div>
      <div className="M0-button">
        <Link href="/buy">
          <Button className={classes.button}>ซื้อสินค้า</Button>
        </Link>
        <Link href="/detail">
          <Button className={classes.button}>รายละเอียด</Button>
        </Link>
        <Link href="/services">
          <Button className={classes.button}>บริการ</Button>
        </Link>
      </div>
    </div>
  );
}
