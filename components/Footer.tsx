export default function Footer() {
  return (
    <footer>
      <h2>Get in touch</h2>
      <address className='w-fit not-italic bg-primary dark:bg-primary-dark'>
        Feel free to reach me at{" "}
        <a href='mailto: bekzodisakov18@gmail.com' className='text-gradient'>
          bekzodisakov18@gmail.com
        </a>
        . You can also find me on{" "}
        <a
          href='https://twitter.com/yusufisakov'
          target='_blank'
          className='text-gradient'
        >
          Twitter
        </a>
        ,{" "}
        <a
          href='https://github.com/BekzodIsakov'
          target='_blank'
          className='text-gradient'
        >
          Github
        </a>{" "}
        and{" "}
        <a
          href='https://t.me/yusufisakov'
          target='_blank'
          className='text-gradient'
        >
          Telegram
        </a>
        .
      </address>
      <hr className='mt-12 mb-4' />
      <p className='w-fit text-sm'>
        Built with Next.js, TypeScript &amp; Tailwind
      </p>
    </footer>
  );
}
