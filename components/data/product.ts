import { StaticImageData } from 'next/image';
import boost from '../../components/assets/product/box/Zigouplex_boostBox.webp';
import performance from '../../components/assets/product/box/Zigouplex_performanceBox.webp';
import sensation from '../../components/assets/product/box/Zigouplex_sensationBox.webp';
import valentine from '../../components/assets/product/box/Zigouplex_valentineBox.webp';
import endurance from '../../components/assets/product/Endurance_Gel.webp';
import classique from '../../components/assets/product/Zigouplex_Classique.webp';
import infinity from '../../components/assets/product/Zigouplex_InfinityGummies.webp';
import nightShot from '../../components/assets/product/Zigouplex_NightShot.webp';

export interface Product {
  id: string;
  cover: StaticImageData;
  name: string;
  theme: string;
  description: string;
  keyComposition: KeyComposition[];
  keyAdvantages: string[];
  packaging: string;
  slogan: string;
  keyPoints: string[];
  price: number;
  alt: string;
  metaTitle: string;
  metaDescription: string;
}

interface KeyComposition {
  ingredient: string;
  benefit: string;
}

interface BoxContent {
  name: string;
  description: string;
}

interface Box {
  id: string;
  name: string;
  cover: StaticImageData;
  description: string;
  contenu: BoxContent[];
  slogan: string;
}

export const boxs: Box[] = [
  {
    id: '0',
    name: 'Zigouplex Boost Box',
    cover: boost,

    description: 'Une box pour un coup de fouet instantané et une performance optimisée.',
    contenu: [
      {
        name: 'Zigouplex Instant Shot',
        description:
          'Une dose unique en flacon à boire, conçue pour une absorption rapide et une efficacité en moins de 30 minutes. Idéal pour les moments imprévus.',
      },
      {
        name: 'Complément Booster',
        description:
          'Une cure de 7 jours en gélules pour un effet cumulatif et une vitalité durable.',
      },
      {
        name: 'Lubrifiant Intense',
        description: 'Enrichi en actifs chauffants pour stimuler encore plus les sensations.',
      },
    ],
    slogan:
      'Les hommes qui veulent une solution rapide pour des performances imprévues et exceptionnelles.',
  },

  {
    id: '1',
    name: 'Zigouplex Performance Plus',
    cover: performance,

    description: 'Une version avancée pour des performances maximales sur le long terme.',
    contenu: [
      {
        name: 'Zigoulex Prolong',
        description:
          'Une formule améliorée en comprimés, destinée à un usage quotidien pour ceux qui souhaitent non seulement résoudre les troubles érectiles, mais aussi améliorer leur endurance et leur vitalité globale.',
      },
      {
        name: 'Spray Préparateur',
        description:
          'À appliquer localement pour un effet stimulant direct et une optimisation de la circulation sanguine.',
      },
    ],
    slogan:
      'Les hommes engagés dans une approche proactive pour booster leur confiance et leur bien-être sexuel.',
  },

  {
    id: '2',
    name: 'Zigouplex Sensation Box (pour le couple)',
    cover: sensation,

    description: 'Une box axée sur le plaisir partagé et la redécouverte de l’intimité en duo.',
    contenu: [
      {
        name: 'Zigouplex Classic',
        description: 'La version standard en cure de 30 jours pour des performances fiables.',
      },
      {
        name: 'Gel Intimité Duo',
        description:
          'Un gel stimulant conçu pour les deux partenaires, offrant des sensations de chaleur et de picotements légers pour intensifier le plaisir.',
      },
      {
        name: 'Cartes Érotiques',
        description:
          'Un jeu de cartes contenant des idées de scénarios et de jeux coquins pour briser la routine.',
      },
    ],
    slogan:
      'Les couples qui souhaitent raviver la flamme et renforcer leur complicité tout en profitant des bienfaits de Zigoulex.',
  },

  {
    id: '3',
    name: 'Zigouplex Valentine Box',
    cover: valentine,

    description:
      'Une box romantique et sensuelle pour célébrer l’amour, raviver la passion et renforcer l’intimité du couple. Idéale pour la Saint-Valentin, elle allie performance et plaisir dans une expérience tout-en-un.',
    contenu: [
      {
        name: 'Zigouplex Passion Shot',
        description:
          'Une dose liquide en flacon à boire, conçue pour un effet rapide et puissant. Ce shot stimulant, enrichi en extraits naturels comme le ginseng et la maca, est idéal pour une montée en puissance instantanée, parfaite pour des moments inoubliables en couple.',
      },
      {
        name: 'Zigouplex Classic (30 comprimés)',
        description:
          'La version classique de Zigouplex, pour une cure de 30 jours. Elle garantit des résultats progressifs sur la durée, boostant l’énergie, la vitalité et les performances.',
      },
      {
        name: 'Gel Sensation Duo',
        description:
          'Un gel stimulant à appliquer avant les moments intimes, offrant une sensation de chaleur et de picotements légers qui intensifient les sensations et l’extase.',
      },
      {
        name: 'Bougies parfumées & Huile de massage',
        description:
          'Créez l’atmosphère parfaite pour une soirée intime. La bougie parfumée libère une odeur douce et sensuelle, tandis que l’huile de massage hydrate la peau et améliore les sensations lors de la caresse.',
      },
      {
        name: "Cartes 'Amour Épicé'",
        description:
          'Un jeu de cartes à thème romantique et sensuel, avec des idées de jeux coquins, des défis sexy, et des scénarios à réaliser ensemble pour pimenter la soirée et explorer de nouvelles facettes de votre complicité.',
      },
    ],
    slogan:
      "Les couples qui souhaitent célébrer la Saint-Valentin avec un cadeau à la fois romantique et sensuel. Idéal pour raviver la passion, renforcer l'intimité et partager des moments inoubliables ensemble.",
  },
];
export const products: Product[] = [
  {
    id: '0',
    name: 'Zigouplex Classique',
    cover: classique,
    alt: 'photo du produit',
    theme: 'La formule essentielle pour retrouver confiance et performance',
    description:
      'Zigouplex Classique est la version phare du produit, conçue pour offrir une solution fiable et efficace aux troubles érectiles. Présentée sous forme de comprimés ou de gélules, cette formule associe des ingrédients naturels et scientifiquement validés pour soutenir la circulation sanguine, stimuler la vitalité et améliorer les performances masculines, naturellement.',
    price: 10,
    metaTitle: 'Zigouplex Classique - Améliorez votre vitalité et vos performances naturellement',
    metaDescription:
      'Découvrez Zigouplex Classique, la solution naturelle pour améliorer la circulation sanguine et stimuler la vitalité masculine. Formule éprouvée avec L-arginine, Ginseng et Maca, idéale pour un soutien quotidien sans effets secondaires.',
    keyComposition: [
      {
        ingredient: 'L-arginine',
        benefit:
          'Favorise la production de monoxyde d’azote pour améliorer la circulation sanguine.',
      },
      {
        ingredient: 'Extrait de Ginseng',
        benefit: 'Reconnu pour ses propriétés revitalisantes et aphrodisiaques.',
      },
      {
        ingredient: 'Maca Péruvienne',
        benefit: 'Améliore l’endurance et stimule la libido.',
      },
      {
        ingredient: 'Zinc',
        benefit: 'Essentiel à la production de testostérone pour un meilleur équilibre hormonal.',
      },
    ],
    keyPoints: [
      'Formule testée cliniquement pour garantir des résultats optimaux.',
      'Adaptée à un usage quotidien sans effets secondaires indésirables.',
      'Convient à tous les âges pour un soutien global de la vitalité masculine.',
    ],
    keyAdvantages: [
      'Action progressive pour des effets durables sur le long terme.',
      'Soutient la vitalité globale, au-delà de la performance sexuelle.',
      'Sans hormones ni effets secondaires majeurs, avec une formule naturelle et sécurisée.',
    ],
    packaging:
      'Disponible en boîtes de 30 comprimés (1 mois de cure) ou 10 comprimés pour une utilisation ponctuelle.',
    slogan: 'Zigouplex Classique : l’assurance d’être à la hauteur, naturellement.',
  },
  {
    id: '1',
    name: 'Zigouplex Nightshot',
    cover: nightShot,
    theme: 'Solution instantanée et discrète pour les moments imprévus',
    price: 12,
    alt: 'Photo du produit',
    metaTitle: 'Zigouplex Nightshot - Solution instantanée pour des performances immédiates',
    metaDescription:
      'Zigouplex Nightshot, une solution ultra-rapide sous forme de stick liquide pour des résultats immédiats. Parfait pour les moments imprévus, avec une absorption rapide et un effet boostant pour vous accompagner à tout moment.',
    description:
      'Une version sous forme de stick liquide (ou ampoule à boire) pour une absorption ultra-rapide et un effet en quelques minutes. Idéal pour des rendez-vous spontanés ou des moments où le timing est essentiel.',
    keyPoints: [
      'Conditionnement pratique et discret : glisse dans une poche ou un portefeuille.',
      'Parfum mentholé ou agrumes pour une consommation agréable.',
      'Efficacité boostée pour une montée en puissance rapide.',
    ],
    keyAdvantages: [
      'Effet rapide pour les situations imprévues.',
      'Facile à transporter et discret à consommer.',
      'Formule concentrée pour une absorption optimale.',
    ],
    packaging: 'Disponible en boîte de 5 ou 10 sticks individuels.',
    slogan: 'Zigouplex Nightshot : prêt quand vous l’êtes.',
    keyComposition: [
      {
        ingredient: 'Extrait de Gingembre',
        benefit: 'Stimule la circulation sanguine et améliore les performances.',
      },
      {
        ingredient: 'Caféine',
        benefit: 'Apporte un boost d’énergie immédiat.',
      },
      {
        ingredient: 'L-arginine',
        benefit:
          'Favorise la production de monoxyde d’azote pour des effets rapides sur la circulation.',
      },
    ],
  },
  {
    id: '2',
    name: 'Zigouplex Endurance Gel',
    cover: endurance,
    theme: 'Optimisation locale pour une performance maîtrisée',
    price: 15,
    alt: 'Photo du produit',
    metaTitle: 'Zigouplex Endurance Gel - Pour des performances durables et efficaces',
    metaDescription:
      'Le Zigouplex Endurance Gel est conçu pour prolonger vos moments intimes et soutenir la vitalité masculine. Une application facile et rapide pour un effet durable, idéal pour les performances de longue durée.',
    description:
      'Une déclinaison sous forme de gel topique à appliquer directement avant l’acte. Ce produit agit localement pour stimuler la circulation sanguine et améliorer l’endurance tout en offrant des sensations amplifiées.',
    keyPoints: [
      'Action ciblée et rapide.',
      'Effet légèrement chauffant ou rafraîchissant pour intensifier les sensations.',
      'Compatible avec les lubrifiants classiques et les préservatifs.',
    ],
    keyAdvantages: [
      'Application locale pour des résultats immédiats.',
      'Convient aux peaux sensibles, sans risque d’irritation.',
      'Effet amplificateur pour une expérience inoubliable.',
    ],
    packaging: 'Tube de 50 ml, facile à utiliser et à transporter.',
    slogan: 'Zigouplex Endurance Gel : à portée de main, pour des résultats à portée de cœur.',
    keyComposition: [
      {
        ingredient: 'Menthol',
        benefit: 'Apporte un effet rafraîchissant pour intensifier les sensations.',
      },
      {
        ingredient: 'Capsaïcine',
        benefit: 'Effet chauffant pour une meilleure stimulation locale.',
      },
      {
        ingredient: 'Extrait d’Aloe Vera',
        benefit: 'Hydrate et protège la peau lors de l’utilisation.',
      },
    ],
  },
  {
    id: '3',
    name: 'Zigouplex Infinity Gummies',
    cover: infinity,
    theme: 'Une cure fun et gourmande pour des résultats progressifs',
    price: 10,
    alt: 'Photo du produit',
    metaTitle: 'Zigouplex Infinity Gummies - Performance et endurance à long terme',
    metaDescription:
      'Les Zigouplex Infinity Gummies offrent une solution gourmande pour améliorer vos performances et votre endurance. Profitez des bienfaits de cette formule pratique en gomme pour un soutien de la vitalité masculine au quotidien.',
    description:
      'Une version sous forme de gummies (bonbons gélifiés) enrichis en ingrédients naturels tels que le ginseng, le maca et la L-arginine, pour une prise quotidienne ludique et sans contrainte. Pensé pour les hommes qui préfèrent une approche légère et progressive.',
    keyPoints: [
      'Saveurs agréables (citron, grenade, fruits rouges).',
      'Sans sucres ajoutés, avec des vitamines pour un boost général.',
      "Facile à intégrer dans la routine quotidienne sans rappeler un 'traitement'.",
    ],
    keyAdvantages: [
      'Un format ludique pour une prise quotidienne agréable.',
      'Convient aux personnes préférant éviter les comprimés ou gélules.',
      'Apporte une énergie globale grâce aux vitamines et minéraux.',
    ],
    packaging: 'Boîte de 30 gummies (1 mois de cure).',
    slogan: 'Zigouplex Infinity : la puissance n’a jamais été aussi douce.',
    keyComposition: [
      {
        ingredient: 'Ginseng',
        benefit: 'Stimule la vitalité et améliore les performances physiques.',
      },
      {
        ingredient: 'Maca Péruvienne',
        benefit: 'Soutient la libido et augmente l’endurance.',
      },
      {
        ingredient: 'Vitamine B12',
        benefit: 'Booste l’énergie et réduit la fatigue.',
      },
    ],
  },
];
