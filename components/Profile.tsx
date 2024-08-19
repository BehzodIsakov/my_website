import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <section className='flex mt-6 sm:mt-20 gap-8 items-center sm:items-start flex-col-reverse sm:flex-row'>
      <div>
        <h1>Hello! My name is Bekzod and I am a web-developer</h1>
        <p>
          I am a front-end developer with knowledge in backend technologies such
          as Node.js and MongoDB. Although my main focus is on frontend
          technologies, I always try to find time to enhance my backend skills.
          I am currently teaching frontend technologies at one of the top
          bootcamps in the country.
        </p>
        <p>
          I have almost 2 years of experience working on real-world
          applications, from building static landing pages in Next.js to
          developing CRM systems for offices with thousands of clients.
        </p>

        <Link href='/about' className='block w-fit mt-4 link-color'>
          Read more
        </Link>

        <Link
          href='https://github.com/BekzodIsakov'
          target='_blank'
          className='action-link-primary'
        >
          View Github
        </Link>
      </div>

      <div className='sm:basis-1/3 sm:shrink-0 mb-3'>
        <Image
          // priority
          src={"/bekzod_isakov.webp"}
          alt='Bekzod Isakov'
          width={550}
          height={550}
          className='w-[200px] sm:w-full mx-auto rounded-full'
        />
      </div>
    </section>
  );
}
