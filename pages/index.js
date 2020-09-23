import Head from 'next/head'
import { Slide } from "react-slideshow-image";



const slideImages = [
  "../public/246x0w.png",
  "../public/pepefrog.png"
];


export default function Home() {
  return (
    <div>
      <Head>
        <title>Sale page</title>
      </Head>
      <div className="image">
        <img src="/M0.png" alt="" style={{ width: 800 }} />
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
