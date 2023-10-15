import Card from "@/components/Card";
import { projects } from "@/lib/constants";

export default function Page() {
  return (
    <>
      <h1 className='mb-8'>Projects</h1>
      <div className='flex flex-wrap gap-x-[4%] gap-y-12 mb-3 pb-3'>
        {projects.map((project, i) => (
          <div key={i} className='sm:basis-[48%]'>
            <Card
              title={project.title}
              description={project.description}
              imgSrc={project.imgSrc}
              srcCode={project.links.srcCode}
              productionLink={project.links.production}
              demoLink={project.links.demo}
            />
          </div>
        ))}
      </div>
    </>
  );
}
