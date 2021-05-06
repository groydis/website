import { gcWrap, center, resume } from "../styles/Home.module.css";
import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div className={gcWrap}>
      <div className={center}>
        <Image
          alt="Awful retro gif that says resume."
          src="/resume2.gif"
          width={206}
          height={44}
          layout="responsive"
        />
      </div>
      <div className={(center, resume)}>
        <div className={center}>
          <Image
            alt="Classic Geo-Cities Flames."
            src="/welcome.gif"
            width={1094}
            height={192}
            // layout="responsive"
          />
        </div>
        <h3>My name is Greyden and this is my resume.</h3>
        <h4>Hit me up via email greydenscott@gmail.com</h4>
        <h4>Save yourself the time of reading this awful page by downloading a modern pdf version of this resume.</h4>
        
        <Link href="/resume.pdf"><a><Image
            alt="Classic Geo-Cities Flames."
            src="/download.gif"
            width={206}
            height={44}
            layout="responsive"
          /></a></Link>
        <div className={center}>
          <Image
            alt="Classic Geo-Cities Flames."
            src="/flames.gif"
            width={206}
            height={44}
            layout="responsive"
          />
          <Link href="/">
            <Image
              alt="Classic Geo-Cities Flames."
              src="/home.gif"
              width={206}
              height={44}
              layout="responsive"
            />
          </Link>
        </div>
        <Image
          alt="Classic Geo-Cities Flames."
          src="/aboutme48.gif"
          width={206}
          height={44}
          layout="responsive"
        />
        <p>
          Technical Co-Founder of Pizza Roulette, with a strong passion for
          entrepreneurship, technology and gamification. Recognised as a
          hands-on and competent leader, skilled at coordinating
          cross-functional teams in fast-paced deadline driven environments. As
          well as being an experienced Software and Web Developer, with
          extensive exposure in the full software development life cycle from
          concept to delivery.
        </p>
        <div className={center}>
          <Image
            alt="Classic Geo-Cities Flames."
            src="/employment.gif"
            width={206}
            height={44}
            layout="responsive"
          />
        </div>
        <h3>Co-Founder of Pizza Roulette / This Is A Company PTY LTD</h3>
        <h5>May 2019 - April 2021</h5>
        <div className={center}>
          <Image
            alt="Classic Geo-Cities Flames."
            src="/datingtop.gif"
            width={150}
            height={100}
            // layout="responsive"
          />
        </div>
        <p>
          Technical Co-Founder at This Is A Company PTY LTD.
          <br />
          Pioneered food based gaming platform Pizza Roulette within Australia,
          growing to over 10,000 customers and generating $150,000 in annual
          revenue. <br />
          Licensed gaming system as promotional tool for food court based
          businesses.
        </p>
        <h3>Self Employed IOS Developer</h3>
        <h5>Aug 2015 - April 2021</h5>
        <div className={center}>
          <Image
            alt="Classic Geo-Cities Flames."
            src="/mobile.gif"
            width={70}
            height={196}
            // layout="responsive"
          />
        </div>
        <p>
          Developed Geo-Color, a Top 10 productivity app for iOS devices. Which
          is used by Geo-Scientists for rock soil color analysis world wide.
          <br />
          Developed Hydro-Geo Technical Apps for Environmental Mining Industry.
        </p>
        <h3>Senior Tech Support Engineer @ Tatts Group</h3>
        <h5>Sep 2015 - June 2016</h5>
        <Image
          alt="Classic Geo-Cities Flames."
          src="/wizard.gif"
          width={84}
          height={132}
          // layout="responsive"
        />
        <p>
          Coaching and mentoring staff. <br />
          Monitor working queues and managing staff workloads. <br />
          Updating and creating Knowledge Base articles.
        </p>
        <Image
          alt="Classic Geo-Cities Flames."
          src="/education.gif"
          width={206}
          height={44}
          layout="responsive"
        />
        <h3>
          Bachelor of Information Technology Majoring in Computer Science @
          Queensland Univerisity of Technology
        </h3>
        <h5>Feb 2017 - Present</h5>
        <h3>MIT Fuse @ Massachusetts Institute of Technology</h3>
        <h5>Jan 2020</h5>
        <p>
          MIT fuse is a three-week hands-on startup experience designed for
          students and small teams looking to work, think, and talk like an
          entrepreneur and start the path towards becoming a company.
        </p>
        <Image
          alt="Classic Geo-Cities Flames."
          src="/clubs.gif"
          width={206}
          height={44}
          layout="responsive"
        />
        <h3>Secretary @ QUT Starters</h3>
        <h5>Nov 2018 - Dec 2019</h5>
        <p>
          QUT Starters is a student-run society connecting innovative students
          who want to put their studies into action through entrepreneurship.
        </p>
        <h3>General Committee & Founder @ QUT Hacking and Technology Society</h3>
        <h5>Jan 2019 - Dec 2019</h5>
        <p>
          The QUT Hacking and Technology Society believes that students should
          be able to learn and practice security in their first years of
          university, regardless of their discipline.
        </p>
      </div>
    </div>
  );
}
