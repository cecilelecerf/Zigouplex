import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';
import { MentalHealthandSexualLifeinYoungMen } from './articles/MentalHealthandSexualLifeinYoungMen';
import { PerformanceAnxietyArticle } from './articles/PerformanceAnxietyArticle';

export interface Article {
  name: string;
  description: string;
  content: ReactNode;
  picture: StaticImageData;
}
interface Blog {
  theme: string;
  articles: Article[];
}

export const blog: Blog[] = [
  {
    theme: 'Santé mentale',
    articles: [PerformanceAnxietyArticle, MentalHealthandSexualLifeinYoungMen],
  },
];
