import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className='flex flex-col items-center mt-4'>
      <div className='w-1/2 sm:w-1/3 md:w-1/4 mb-4'>
        <Image
          src={"/bekzod_isakov.webp"}
          alt='Bekzod Isakov'
          width={250}
          height={250}
          className='rounded-full'
        />
      </div>
      <div>
        <h1>Hello! My name is Bekzod and I&apos;m a web developer</h1>
        <p>
          I am a front-end developer with proven experience in building
          different types consumer and enterprise web apps. I love creating an
          aesthetic design into a user-friendly, responsive and fast product.
        </p>
        <p>
          I first began to learn coding as a hobby. After a few months of
          enjoying building a few things with HTML and CSS, I decided to quit my
          job to learn programming full time.
        </p>
        <p>
          My first internship was in a startup named Transform. It was my first
          exposure to writing real world software and working with designers,
          backend developers and product owner. After 6 months of working for
          Transform, I joined a coding bootcamp as a front-end developer. With
          the new team, we worked on several consumer and enterprise apps such
          as food delivery PWA(Progressive Web App), CMS and CRM systems and
          online learning platform. Through these experiences, I learnt to work
          in a team, collaborate with other teams, work with product managers,
          follow set deadlines and write software that is both readable and
          maintanable.
        </p>

        <Link
          href='https://github.com/BekzodIsakov'
          target='_blank'
          className='action-link-primary'
        >
          View Github
        </Link>
      </div>
    </div>
  );
}
