import { abWrap, center } from "../styles/Home.module.css";
// import '../styles/about.module.css'
import Image from "next/image";
// import Link from 'next/link'
// import "nes.css/css/nes.min.css";
import "hack";

export default function Home() {
  return (
    <div className={abWrap}>
      {/* <div className={center}>
        <Image
          alt="Awful retro gif that says resume."
          src="/flamebg.jpg"
          width={206}
          height={44}
          layout="responsive"
        />
      </div> */}
      <div className={center}>
        <h1>About Me</h1>
        <p>
          My name is Greyden and I am a software developer from Brisbane,
          Australia.
          <br />
          This website was built as a homage to the era of internet I grew up
          with.
          <br />
          Talking about yourself is boring, here is a bunch of stuff I could of
          done had I organised my life better.
        </p>
        <Image
          alt="Awful retro gif that says resume."
          src="/queen.png"
          width={976}
          height={549}
          layout="responsive"
        />
        <p>
          This one time I really wanted to meet the queen, but not be dressed
          for the occasion. In this instance I'm dressed up as Malakili the
          Rancor Handler from star wars. This is a low effort cosplay. I am
          patiently waiting my turn to shake her hand.
        </p>
        <Image
          alt="Awful retro gif that says resume."
          src="/obama.png"
          width={900}
          height={600}
          layout="responsive"
        />
        <p>
          I've always felt like I had the potential to influence global
          politics, in this instance I had just helped Obama with global
          policies and had casually talked about upcomming new olympic sport
          categories.
        </p>
        <Image
          alt="Awful retro gif that says resume."
          src="/karate.png"
          width={900}
          height={600}
          layout="responsive"
        />
        <p>
          With enough training anything is possible. Here I am stretching before
          an upcomming karate tournament. I won first place with a deadly
          scissor kick. My legs are now registered as deadly weapons.
        </p>
        <Image
          alt="Awful retro gif that says resume."
          src="/logie.png"
          width={900}
          height={600}
          layout="responsive"
        />
        <p>
          This is my 10th Logie win for oustanding performance on the hit show
          "Secret Life of Us".
        </p>
      </div>
    </div>
  );
}
