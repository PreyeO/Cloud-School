// types.ts
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface Resource {
  type: string;
  name: string;
  link: string;
  icon: ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;
}

export interface Lesson {
  id: number;
  title: string;
  video: string;
  duration: string;
  difficulty: string;
  whatYouWillLearn: string[];
  overview: string;
  resources: Resource[];
}
