import Badge from "./Badge";
import { technologies, skills } from "@/lib/constants";

export default function Skills() {
  return (
    <section>
      <h2 className='mb-4'>Technologies &amp; Skills</h2>
      <ul className='flex justify-center flex-wrap gap-3 max-w-xl mb-9'>
        {technologies.map((t, i) => (
          <Badge key={i}>{t}</Badge>
        ))}
      </ul>

      <ul className='list-disc pl-4'>
        {skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </section>
  );
}
