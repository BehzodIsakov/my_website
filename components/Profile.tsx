import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <section className='flex mt-8 sm:mt-20 gap-8 items-center sm:items-start flex-col-reverse sm:flex-row'>
      <div>
        <h1>Hello! My name is Bekzod and I&apos;m a web developer</h1>
        <p>
          I am a front-end developer with proven experience in building
          different types of consumer and enterprise web apps. I love creating
          an aesthetic design into a user-friendly, responsive and fast product.
        </p>
        <p>
          I am experienced in from working in a small startup to working in
          larger cross-functional teams and developing consumer and enterprise
          apps such as CRM, CMS systems and online learning platform.
        </p>

        <Link
          href='/about'
          className='block w-fit mt-4 text-indigo-400 font-light'
        >
          Read more
        </Link>

        <Link
          href='https://github.com/BekzodIsakov'
          target='_blank'
          className='button-link-primary'
        >
          View Github
        </Link>
      </div>

      <div className='w-1/2 sm:basis-1/3 sm:shrink-0 mb-3'>
        <Image
          // priority
          src={"/bekzod_isakov.webp"}
          alt='Bekzod Isakov'
          width={550}
          height={550}
          className='rounded-full'
        />
      </div>
    </section>
  );
}
