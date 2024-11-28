import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';
import { MentalHealthandSexualLifeinYoungMen } from './articles/MentalHealthandSexualLifeinYoungMen';
import { PerformanceAnxietyArticle } from './articles/PerformanceAnxietyArticle';

export interface Article {
  id : number
  name: string;
  description: string;
  content: ReactNode;
  picture: StaticImageData;
}
interface Blog {
  topic: string;
  articles: Article[];
}

export const blog: Record<string, Blog> = {
  "sante-mentale" :{ 
    topic: 'Santé mentale',
    articles: [PerformanceAnxietyArticle, MentalHealthandSexualLifeinYoungMen],
  },

}