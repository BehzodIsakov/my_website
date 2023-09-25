import Card from "./Card";
import Link from "next/link";

export default function Projects() {
  return (
    <section>
      <h2 className='mb-2'>Projects</h2>
      <h3 className='mb-6'>
        Some of the projects I&apos;ve built with a team and as a side project:
      </h3>
      <div>
        <div className='flex sm:flex-wrap gap-x-[4%] gap-y-10 mb-3 pb-3 overflow-auto'>
          <Card
            imgSrc='/assets/screenshot.png'
            title='Project card'
            description='Project description'
            codeLink='https://github.com/BekzodIsakov'
          />

          <Card
            imgSrc='/assets/screenshot.png'
            title='Project card'
            description='Project description'
            codeLink='https://github.com/BekzodIsakov'
          />

          <Card
            imgSrc='/assets/screenshot.png'
            title='Project card'
            description='Project description'
            codeLink='https://github.com/BekzodIsakov'
          />

          <Card
            imgSrc='/assets/screenshot.png'
            title='Project card'
            description='Project description'
            codeLink='https://github.com/BekzodIsakov'
          />
        </div>
      </div>
      <Link href='projects' className='link-outline'>
        View all
      </Link>
    </section>
  );
}
