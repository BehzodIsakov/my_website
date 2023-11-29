export type theme = "light" | "dark" | "system";

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
}
