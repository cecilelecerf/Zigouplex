import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';
import { RekindleFlameCouple } from './articles/couple/RekindleFlameCouple';
import { TroublesErectiles } from './articles/couple/TroublesErectiles';
import { DepressionAndLibido } from './articles/mentalHealth/DepressionAndLibido';
import { MentalHealthandSexualLifeinYoungMen } from './articles/mentalHealth/MentalHealthandSexualLifeinYoungMen';
import { MentalHealthSexualityArticle } from './articles/mentalHealth/MentalHealthSexualityArticle';
import { StressErectionArticle } from './articles/mentalHealth/StressErectionArticle';
import { ImpactAlimentationSexuelle } from './articles/sexualHealth/ImpactAlimentationSexuelle';

export interface Article {
  id: number;
  name: string;
  description: ReactNode;
  content: ReactNode;
  picture?: StaticImageData;
}
interface Blog {
  topic: string;
  articles: Article[];
}

export const blog: Record<string, Blog> = {
  'sante-mentale': {
    topic: 'Santé mentale',

    articles: [
      MentalHealthSexualityArticle,
      MentalHealthandSexualLifeinYoungMen,
      StressErectionArticle,
      DepressionAndLibido,
    ],
  },
  couple: {
    topic: 'Couple',
    articles: [RekindleFlameCouple, TroublesErectiles],
  },
  sexualHealth: {
    topic: 'Santé sexuelle',
    articles: [TroublesErectiles, ImpactAlimentationSexuelle],
  },
};