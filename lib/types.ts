export interface NavLink {
  name: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  imgSrc: string;
  links: {
    production: string;
    srcCode: string;
    demo?: string;
  };
  stack: string[];
}
