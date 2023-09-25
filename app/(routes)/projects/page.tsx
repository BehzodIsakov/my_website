import Card from "@/components/Card";

export default function Page() {
  return (
    <>
      <h1 className='mb-8'>Projects</h1>
      <div className='flex flex-wrap gap-x-[4%] gap-y-10 mb-3 pb-3 overflow-auto'>
        <div className='sm:basis-[48%]'>
          <Card
            imgSrc='/assets/screenshot.png'
            title='Project card'
            description='Project description'
            codeLink='https://github.com/BekzodIsakov'
          />
        </div>
        <div className='sm:basis-[48%]'>
          <Card
            imgSrc='/assets/screenshot.png'
            title='Project card'
            description='Project description'
            codeLink='https://github.com/BekzodIsakov'
          />
        </div>
        <div className='sm:basis-[48%]'>
          <Card
            imgSrc='/assets/screenshot.png'
            title='Project card'
            description='Project description'
            codeLink='https://github.com/BekzodIsakov'
          />
        </div>
        <div className='sm:basis-[48%]'>
          <Card
            imgSrc='/assets/screenshot.png'
            title='Project card'
            description='Project description'
            codeLink='https://github.com/BekzodIsakov'
          />
        </div>
      </div>
    </>
  );
}
