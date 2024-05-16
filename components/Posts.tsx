import Link from "next/link";

export default function Posts() {
  return (
    <section>
      <h2 className='mb-2'>Posts</h2>
      <h3 className='mb-5'>
        Sharing my thoughts on things I&apos;m learning and building
      </h3>
      <Link href='/posts' className='button-link-secondary'>
        See posts
      </Link>
    </section>
  );
}
