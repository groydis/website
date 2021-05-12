import { projects, center, centerText } from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={projects}>
      <div className={center}>
        <h1 className={centerText}>Projects!</h1>
        <Link href="/">
          <h3 className={centerText}>Home</h3>
        </Link>
        <Image
          alt="Pizza Roulette Logo"
          src="/pizzaroulettelogo.png"
          width={750}
          height={252}
          layout="intrinsic"
        />
        <p>
          Pizza Roulette started as an exercise in entrepreneurship amongst 3
          friends. It quickly grew into a underground cult hit with over 10,000
          players
        </p>
        <p>
          The concept was simple, 15 players, $2 each, 1 winner gets a pizza.
        </p>
        <p>
          Each player paid $2 and was placed on to a waiting list, when the list
          reached 15 people, they were automatically directed to a page with a
          wheel on it. The wheel would spin and who ever it landed on won a
          pizza.
        </p>
        <p>
          The pizza order was completely automated, taking details already
          provided by the customer and processing a pizza order through
          Australias largest Pizza Franchines.
        </p>
        <p>
          We launched with a charity night to raise awareness and money for our
          universities food bank.
        </p>
        <p>
          Over the next few weeks the game was adapted into a live stream where
          a friend played video games over facebook live and encouraged people
          to participate in Pizza Roulette.
        </p>
        <p>
          One week our friend wasn't available to play video games on stream, so
          we turned the site on without him and it sustained itself without
          additional entertainment. We then began switching the game on every
          night and it grew beyond anything we could of ever imagine.
        </p>
        <p>
          As the game was shared amongsts people all over Australia we began to
          recieve media attention.
        </p>
        <a href="https://www.couriermail.com.au/questnews/how-to-get-a-dominos-pizza-delivered-to-your-door-for-2/news-story/e7f2b80a40eb1c13bfcd5cbefca71481">
          Courier Mail
        </a>
        <br />
        <a href="https://www.smartcompany.com.au/startupsmart/profiles/pizza-roulette/">
          Smart Company
        </a>
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QTyYAWEow_g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br />
        <p>
          We were featued in the local news paper, Today Tonight and a sluth of
          "start up" web blogs.
        </p>
        <p>
          We marketed the product mostly via facebook using memes to make fun of
          the experience and the customer base.
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lrRfnJXTWck"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br />
        <p>
          Eventually, fans began making their own content. One awesome
          collective of lads even put together a song and music video.
        </p>
        <p>
          When covid hit we reached new heights. People sat at home bored and
          lonely looking for a way to keep connected with friends and family.
          Our platform grew and we eventaully caught the attention of the
          Australian Communications and Media Authority.
        </p>
        <p>
          These government fun wreckers oversee the Interactive Gambling Act.
          And despite us navigating the legal quirks of this style of game, they
          saw it best that we change our business model.
        </p>
        <p>
          Rather than clown-a-bout doing a dance with a goverment body we
          decided to cease operations and pursue other projects.
        </p>
        <h3>Geo-Color</h3>
        <Image
          alt="Geo Color App Icon"
          src="/geocolor.png"
          width={180}
          height={180}
          layout="intrinsic"
        />
        <p>
          After noticing someone return from a remote PNG field trip, where they
          rapeled into the jungle via helicopter with a back pack of gear. I
          questioned why they were carrying a giant book of colour samples.
        </p>
        <p>
          The samples where used to identify rock/soil colour. Knowing there
          could be a better way, I digitised the product and tossed it up on the
          app store. Unbenknownst to me it was a world wide problem and the app
          quickly shot up the charts to 9th position in the productivity app
          section.
        </p>
        <p>
          The app was expanded to include rock colours from different continents
          aroudn the world.
        </p>
        <p>Sadly, it is no longer for sale.</p>
        <Image
          alt="Meal Wheel Logo"
          src="/MealWheel.png"
          width={1500}
          height={350}
          layout="intrinsic"
        />
        <p>
          Meal Wheel is a promotional game licensed to a Brisbane based
          university to promote eating within the campus food court.
        </p>
        <Image
          alt="Dinner Royale Logo"
          src="/droyale.png"
          width={337}
          height={346}
          layout="intrinsic"
        />
        <p>
          Dinner Royale was an experiment post Pizza Roulette to promote food
          products through a daily game of flappy bird, where the players with
          the top score won prizes.
        </p>
        <p>
          Unfortunately we were unable to convert players to customers of the
          promoted products and decided to cease operations.
        </p>
      </div>
    </div>
  );
}
