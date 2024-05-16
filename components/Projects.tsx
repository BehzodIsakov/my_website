import Card from "./Card";
import Link from "next/link";
import { projects } from "@/lib/constants";

export default function Projects() {
  return (
    <section>
      <h2 className='mb-2'>Projects</h2>
      <h3 className='mb-6'>
        Some of the projects I&apos;ve built with a team or as a side project:
      </h3>
      <div className='flex sm:flex-wrap gap-x-[4%] gap-y-12 mb-3 pb-3 overflow-auto'>
        {projects.map((project, i) => (
          <div key={i} className='basis-[48%]'>
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
      <Link href='/projects' className='button-link-secondary'>
        View all
      </Link>
    </section>
  );
}
