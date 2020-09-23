import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from "styled-components";



export default function Home() {
  return (
    <div>
      <Head>
        <title>Sale page</title>
      </Head>
      <img src="/vercel.svg" alt="" height={400} />
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
