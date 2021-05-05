import {bgWrap, center} from '../styles/Home.module.css'
import Image from 'next/image'

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
              {/* <br />C:&#92;WINDOWS&#92;SYSTEM32&gt; Welcome to my home page. */}
              <br />C:&#92;dir
              <br /> Volume in drive C is OS
              <br /> Volume Serial Number is 1337-C0D3R
              <br />
              <br /> Directory of C:&#92;
              <br />
              <br />2021-01-01 12:01PM  &#10094;DIR&#10095;  <Link href="/"><a>HOME</a></Link>
              <br />    6 Dir(s) 34,871,164 bytes free
              <br />C:&#92;
              {/* <br />C:&#92;GreyDOS&#92;RESUME&gt; Resume
              <br />C:&#92;GreyDOS&#92;ABOUT&gt; About Me
              <br />C:&#92;GreyDOS&#92;GITHUB&gt; GitHub
              <br />C:&#92;GreyDOS&#92;TWITTER&gt; Twitter
              <br />C:&#92;GreyDOS&#92;LINKEDIN&gt; Linkedin
              <br />C:&#92;GreyDOS&#92;PROJECTS&gt; Projects */}
            </pre>
          </div>
        </div>
        </div>
    </div>
  )
}
