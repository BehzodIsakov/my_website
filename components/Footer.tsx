export default function Footer() {
  return (
    <footer className='px-1 sm:px-12'>
      <h2>Get in touch</h2>
      <address className='w-fit not-italic bg-primary'>
        Feel free to reach me at{" "}
        <a
          href='mailto: bekzodisakov18@gmail.com'
          className='text-gradient-primary'
        >
          bekzodisakov18@gmail.com
        </a>
        . You can also find me on{" "}
        <a
          href='https://twitter.com/yusufisakov'
          target='_blank'
          className='text-gradient-primary'
        >
          Twitter
        </a>
        ,{" "}
        <a
          href='https://github.com/BekzodIsakov'
          target='_blank'
          className='text-gradient-primary'
        >
          Github
        </a>{" "}
        and{" "}
        <a
          href='https://t.me/yusufisakov'
          target='_blank'
          className='text-gradient-primary'
        >
          Telegram
        </a>
        .
      </address>
      <hr className='mt-12 mb-4' />
      <p className='w-fit text-sm'>
        Built with TypeScript, Tailwind &amp; Next.js
      </p>
    </footer>
  );
}
