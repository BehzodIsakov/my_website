import Badge from "./Badge";

export default function Skills() {
  return (
    <section>
      <h2 className='mb-4'>Skills &amp; Technologies</h2>
      <ul className='flex justify-center flex-wrap gap-3 max-w-xl mb-9'>
        <Badge>HTML 5</Badge>
        <Badge>CSS</Badge>
        <Badge>Boostrap</Badge>
        <Badge>Tailwind</Badge>
        <Badge>Javascript</Badge>
        <Badge>Typescript</Badge>
        <Badge>React</Badge>
        <Badge>Next.js</Badge>
        <Badge>Git</Badge>
        <Badge>Github</Badge>
        <Badge>Node.js</Badge>
        <Badge>Express.js</Badge>
        <Badge>MongoDB</Badge>
        <Badge>Mongoose</Badge>
        <Badge>Redux/Toolkit</Badge>
      </ul>

      <ul className='list-disc pl-4'>
        <li>Responsive design</li>
        <li>Cross-Browser Compatibility</li>
        <li>Version Control</li>
        <li>Testing and Debugging</li>
        <li>Web Performance</li>
        <li>Soft skills</li>
      </ul>
    </section>
  );
}
