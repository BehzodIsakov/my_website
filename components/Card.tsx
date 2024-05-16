import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "@/public/assets/arrow-right.svg";

interface CardProps {
  imgSrc?: string;
  title: string;
  description: string;
  srcCode: string;
  demoLink?: string;
  productionLink?: string;
}

function CardHeader() {
  return (
    <div className='flex items-center gap-6 px-6 py-2 bg-gray-100 dark:bg-gray-700'>
      <div className='flex gap-1'>
        <div className='bg-gray-300 dark:bg-gray-300 rounded-full w-3 h-3'></div>
        <div className='bg-gray-300 dark:bg-gray-300 rounded-full w-3 h-3'></div>
        <div className='bg-gray-300 dark:bg-gray-300 rounded-full w-3 h-3'></div>
      </div>
      <div className='h-6 grow w-10 bg-neutral-50 dark:bg-gray-300 rounded-md'></div>
      <div>
        <ArrowRightIcon className='w-5 h-5 text-gray-500 dark:text-gray-400 stroke-2 ' />
      </div>
    </div>
  );
}

export default function Card({
  title,
  description,
  imgSrc = "",
  srcCode,
  demoLink = "",
  productionLink = "",
}: CardProps) {
  return (
    <div>
      <div className='rounded-md overflow-hidden shadow-lg mb-6'>
        <CardHeader />
        <Image
          src={imgSrc}
          alt={title}
          width={500}
          height={340}
          className='w-full'
        />
      </div>
      <h4 className='text-xl font-semibold'>{title}</h4>
      <p className='text-sm line-clamp-3'>
        {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laboriosam perferendis officia qui quaerat, pariatur necessitatibus!
        Modi alias quia id sed?
      </p>
      <div className='flex gap-3 px-1'>
        {productionLink && (
          <Link target='_blank' href={productionLink}>
            Link
          </Link>
        )}
        {demoLink && (
          <Link target='_blank' href={demoLink}>
            Video
          </Link>
        )}
        {srcCode && (
          <Link target='_blank' href={srcCode}>
            Github
          </Link>
        )}
      </div>
    </div>
  );
}
