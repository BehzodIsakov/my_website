import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
        <h1>Hello! My name is Bekzod and I am a web-developer</h1>
        <p>
          I am a front-end developer with knowledge in backend technologies such
          as Node.js and MongoDB. Although my main focus is on frontend
          technologies, I always try to find time to enhance my backend skills.
          I am currently teaching frontend technologies at one of the top
          bootcamps in the country, which helps me identify gaps in my knowledge
          and improve my foundational skills. This role also allows me to
          understand how the entire web ecosystem works together.
        </p>
        <p>
          I have nearly 2 years of experience working on real-world
          applications, from building static landing pages in Next.js to
          developing CRM systems for offices with thousands of clients. Learning
          programming through self-study taught me how to plan my learning path
          and solve problems independently.
        </p>
        <p>
          I like to consider myself a web developer rather than just a frontend
          or backend specialist. My motto in the field is “A junior forever,”
          which reminds me to continually improve my skills, especially the
          foundational basics.
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
