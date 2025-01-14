import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';
import { CommunicationInRelationships } from './articles/couple/CommunicationInRelationships';
import { IntimacyAfterParenthood } from './articles/couple/IntimacyAfterParenthood';
import { JealousyAndTrust } from './articles/couple/JealousyAndTrust';
import { RekindleFlameCouple } from './articles/couple/RekindleFlameCouple';
import { TroublesErectilesCouple } from './articles/couple/TroublesErectilesCouple';
import { ConfidenceAndPerformance } from './articles/maleVitalityConfidence/ConfidenceAndPerformance';
import { ConfidenceAndSexualHealth } from './articles/maleVitalityConfidence/ConfidenceAndSexualHealth';
import { EnduranceAndResilience } from './articles/maleVitalityConfidence/EnduranceAndResilience';
import { ExerciseAndSexualHealth } from './articles/maleVitalityConfidence/ExerciseAndSexualHealth';
import { HormonalBalanceAndSexualHealth } from './articles/maleVitalityConfidence/HormonalBalanceAndSexualHealth';
import { LocalSolutionsForEndurance } from './articles/maleVitalityConfidence/LocalSolutionsForEndurance';
import { NutritionAndSexualHealth } from './articles/maleVitalityConfidence/NutritionAndSexualHealth';
import { SleepAndSexualPerformance } from './articles/maleVitalityConfidence/SleepAndSexualPerformance';
import { VitalityBoost } from './articles/maleVitalityConfidence/VitalityBoost';
import { ZigouplexRoutine } from './articles/maleVitalityConfidence/ZigouplexRoutine';
import { AnxietyAndIntimac } from './articles/mentalHealth/AnxietyAndIntimacy';
import { DepressionAndLibido } from './articles/mentalHealth/DepressionAndLibido';
import { MentalHealthandSexualLifeinYoungMen } from './articles/mentalHealth/MentalHealthandSexualLifeinYoungMen';
import { MentalHealthSexualityArticle } from './articles/mentalHealth/MentalHealthSexualityArticle';
import { OvercomingSexualTrauma } from './articles/mentalHealth/OvercomingSexualTrauma';
import { SelfEsteemAndSexuality } from './articles/mentalHealth/SelfEsteemAndSexuality';
import { StressErectionArticle } from './articles/mentalHealth/StressErectionArticle';
import { FemaleSexualHealthBasics } from './articles/sexualHealth/FemaleSexualHealthBasics';
import { ImpactAlimentationSexuelle } from './articles/sexualHealth/ImpactAlimentationSexuelle';
import { ImportanceOfRegularCheckups } from './articles/sexualHealth/ImportanceOfRegularCheckups';
import { STDPrevention } from './articles/sexualHealth/STDPrevention';
import { TroublesErectiles } from './articles/sexualHealth/TroublesErectiles';
import { MeditationForEveryone } from './articles/wellBeing/MeditationForEveryone';
import { MindfulnessAndSexualIntimacy } from './articles/wellBeing/MindfulnessAndSexualIntimacy';
import { PowerOfSleep } from './articles/wellBeing/PowerOfSleep';
import { ReconnectWithYourself } from './articles/wellBeing/ReconnectWithYourself';
import { SelfLoveAndConfidenceInSexuality } from './articles/wellBeing/SelfLoveAndConfidenceInSexuality';
import { YogaForMentalAndSexualHealth } from './articles/wellBeing/YogaForMentalAndSexualHealth';

export interface Article {
  id: number;
  name: string;
  description: ReactNode;
  content: ReactNode;
  picture?: StaticImageData;
  metaTitle: string;
  metaDescription: string;
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
      AnxietyAndIntimac,
      SelfEsteemAndSexuality,
      OvercomingSexualTrauma,
    ],
  },
  couple: {
    topic: 'Couple',
    articles: [
      RekindleFlameCouple,
      TroublesErectilesCouple,
      CommunicationInRelationships,
      JealousyAndTrust,
      IntimacyAfterParenthood,
    ],
  },
  sexualHealth: {
    topic: 'Santé sexuelle',
    articles: [
      TroublesErectiles,
      ImpactAlimentationSexuelle,
      STDPrevention,
      ImportanceOfRegularCheckups,
      FemaleSexualHealthBasics,
    ],
  },
  weelBeing: {
    topic: 'Bien être',
    articles: [
      MindfulnessAndSexualIntimacy,
      SelfLoveAndConfidenceInSexuality,
      YogaForMentalAndSexualHealth,
      MeditationForEveryone,
      PowerOfSleep,
      ReconnectWithYourself,
    ],
  },
  maleVitalityConfidence: {
    topic: 'Vitalité et Confiance Masculine',
    articles: [
      ConfidenceAndPerformance,
      ConfidenceAndSexualHealth,
      EnduranceAndResilience,
      ExerciseAndSexualHealth,
      HormonalBalanceAndSexualHealth,
      LocalSolutionsForEndurance,
      NutritionAndSexualHealth,
      SleepAndSexualPerformance,
      VitalityBoost,
      ZigouplexRoutine,
    ],
  },
};
