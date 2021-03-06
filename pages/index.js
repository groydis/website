import {bgWrap, center} from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className={bgWrap}>
        <Image
          alt="Majestic View"
          src="/background.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={center}>
        <Image
          alt="Classic Word out that reads - Greyden Scott"
          src="/wordart-gs.png"
          width={1797}
          height={885}
        />
      </div>
      <div className={center}>
        <div className="window">
          <div className="title-bar">
            <div className="title-bar-text">Command Prompt</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <pre>
              Welcome To GreyDOS 1.0 &#10094;C&#10095;
              <br />C:&#92;dir
              <br /> Volume in drive C is OS
              <br /> Volume Serial Number is 1337-C0D3R
              <br />
              <br /> Directory of C:&#92;
              <br />
              <br />2021-01-01 12:01PM  &#10094;DIR&#10095;  <Link href="/resume"><a>RESUME</a></Link>
              <br />2021-03-26 12:02PM  &#10094;DIR&#10095;  <Link href="/about"><a>ABOUT</a></Link>
              <br />2021-02-02 12:01PM  &#10094;DIR&#10095;  <a href="https://github.com/groydis">GITHUB</a>
              <br />2021-04-20 12:08PM  &#10094;DIR&#10095;  <a href="https://www.linkedin.com/in/greyden-scott-734122175/">LINKEDIN</a>
              <br />2021-01-01 12:01PM  &#10094;DIR&#10095;  <a href="https://twitter.com/greydenscott">TWITTER</a>
              <br />2021-03-10 12:16PM  &#10094;DIR&#10095;  <Link href="/projects"><a>PROJECTS</a></Link>
              <br />    6 Dir(s) 34,871,164 bytes free
              <br />C:&#92;
            </pre>
          </div>
        </div>
        </div>
    </div>
  )
}
