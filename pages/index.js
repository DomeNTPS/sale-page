import Head from 'next/head'
import { Slide } from "react-slideshow-image";
import { Fade } from "react-slideshow-image";



const fadeImages = ["/M0.png", "/M0.png"];


export default function Home() {
  return (
    <div>
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
      <div className="M0">M0 Series</div>
      <div>เครื่องตรวจสอบคุณภาพข้าวด้วยเทคโนโลยีปัญญาประดิษฐ์ (AI)</div>
      <div>ใช้เวลาตรวจสอบเพียง 1 นาที</div>
      <div>แม่นยำถึง 93 %</div>
      <div>
        ราคาเริ่ม&nbsp;&nbsp;60,000 บาท / ปีแรก <br /> &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; 30,000 บาท / ปีแรก
      </div>
    </div>
  );
}
