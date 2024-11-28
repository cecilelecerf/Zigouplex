export type Testimonial = {
  id: string; // ID unique pour chaque témoignage
  name: string;
  age: number;
  city: string;
  feedback: string;
  rating: number; // Note sur 5
};

type ProductTestimonials = {
  ZigouplexClassique: Testimonial[];
  ZigouplexNightshot: Testimonial[];
  ZigouplexEnduranceGel: Testimonial[];
  ZigouplexInfinityGummies: Testimonial[];
};

export const testimonials: ProductTestimonials = {
  ZigouplexClassique: [
    {
      id: '1',
      name: 'Jean-Marc',
      age: 52,
      city: 'Paris',
      feedback:
        'Avec l’âge, j’ai commencé à ressentir des baisses de régime, ce qui affectait ma confiance. Depuis que je prends Zigouplex Classique, je sens une vraie différence. Pas seulement pour mes performances, mais aussi pour mon énergie au quotidien. C’est un changement global, et ma femme l’a remarqué aussi ! Enfin une solution naturelle qui marche.',
      rating: 5,
    },
    {
      id: '2',
      name: 'Nicolas',
      age: 38,
      city: 'Lyon',
      feedback:
        'J’étais sceptique au début, mais Zigouplex Classique m’a surpris. En quelques semaines de cure, j’ai retrouvé une vitalité que je pensais perdue. C’est rassurant de savoir que ce produit est naturel et sans effets secondaires. En bonus, même mon sommeil s’est amélioré ! Je recommande à 100%.',
      rating: 4,
    },
    {
      id: '3',
      name: 'Patrick',
      age: 45,
      city: 'Marseille',
      feedback:
        'Je l’ai essayé comme ‘boost’ avant une soirée importante et le résultat était impeccable. Pas de stress, pas de calcul de timing, juste une performance au top. Depuis, j’ai intégré Zigouplex dans ma routine en cure, et je me sens beaucoup plus confiant dans tous les aspects de ma vie.',
      rating: 5,
    },
    {
      id: '4',
      name: 'Laurent',
      age: 50,
      city: 'Toulouse',
      feedback:
        'Ce produit a changé ma vie. Avant, j’avais parfois des moments d’incertitude qui ruinaient tout. Zigouplex Classique agit progressivement, mais les résultats sont durables. Maintenant, je me sens toujours prêt, et ça m’a donné un gros coup de boost psychologique aussi.',
      rating: 5,
    },
    {
      id: '5',
      name: 'Karim',
      age: 42,
      city: 'Lille',
      feedback:
        'Les effets sont naturels, mais on les sent vraiment. Ce que j’apprécie le plus, c’est que Zigouplex ne donne pas cette sensation artificielle ou forcée. Tout se passe naturellement, et je sais que je prends soin de mon corps en même temps.',
      rating: 4,
    },
    {
      id: '6',
      name: 'Hugo',
      age: 35,
      city: 'Bordeaux',
      feedback:
        'Zigouplex Classique m’a réconcilié avec mon corps. Je l’ai acheté au départ par curiosité, et je ne m’attendais pas à un tel impact sur ma vie intime. Même mon stress a diminué, probablement grâce aux effets sur la circulation et l’énergie. Produit génial !',
      rating: 4,
    },
    {
      id: '7',
      name: 'Olivier',
      age: 60,
      city: 'Nice',
      feedback:
        'J’ai essayé plusieurs produits avant Zigouplex, mais rien n’a fonctionné comme celui-ci. Je n’ai jamais ressenti d’effets secondaires, et ma partenaire a remarqué la différence avant même que je lui dise ce que je prenais. C’est un investissement qui vaut largement le coup.',
      rating: 5,
    },
    {
      id: '8',
      name: 'Julien',
      age: 47,
      city: 'Strasbourg',
      feedback:
        'Ce qui m’a plu, c’est la double option : en cure ou en prise ponctuelle. J’ai commencé par le format 10 comprimés pour tester, et maintenant je suis passé à la cure. Les résultats sont constants, et je suis ravi d’avoir enfin trouvé un produit qui tient ses promesses.',
      rating: 4,
    },
    {
      id: '9',
      name: 'Éric',
      age: 55,
      city: 'Nantes',
      feedback:
        'Mon médecin m’avait conseillé une solution chimique, mais je voulais une approche naturelle. Zigouplex Classique a coché toutes les cases : efficace, sûr, et même bénéfique pour ma santé globale. Je le recommande sans hésiter à mes amis.',
      rating: 5,
    },
    {
      id: '10',
      name: 'Romain',
      age: 40,
      city: 'Montpellier',
      feedback:
        'Les premières prises m’ont convaincu. Pas besoin de planifier ou de stresser avant l’acte, Zigouplex fait le job et améliore tout doucement votre confiance. C’est un produit qui change la donne pour les hommes modernes.',
      rating: 4,
    },
  ],

  ZigouplexNightshot: [
    {
      id: '11',
      name: 'Maxime',
      age: 34,
      city: 'Paris',
      feedback:
        'J’ai souvent des rendez-vous spontanés, et il m’est arrivé de me sentir un peu moins sûr de moi parfois. Depuis que j’ai découvert Zigouplex Nightshot, je ne stresse plus jamais. Une ampoule avant l’acte, et je suis prêt à tout. En plus, le goût mentholé est vraiment agréable, ça ne fait pas du tout médical. Super produit !',
      rating: 5,
    },
    {
      id: '12',
      name: 'Antoine',
      age: 41,
      city: 'Lyon',
      feedback:
        'Le format est top : petit, discret et super pratique à emporter partout. J’ai testé Zigouplex Nightshot lors d’un week-end imprévu, et il a fait son effet en quelques minutes. Je n’ai plus à réfléchir à la prise des heures avant, il suffit de boire l’ampoule et tout roule. C’est exactement ce dont j’avais besoin.',
      rating: 5,
    },
    {
      id: '13',
      name: 'Guillaume',
      age: 38,
      city: 'Toulouse',
      feedback:
        'Quand je me retrouve dans une situation où le timing est serré, je n’ai plus de doute. Zigouplex Nightshot est ma solution instantanée. Il agit vite, pas d’effets secondaires désagréables et en plus, ça se glisse facilement dans ma poche. C’est discret, efficace et simple à utiliser.',
      rating: 5,
    },
    {
      id: '14',
      name: 'Thomas',
      age: 29,
      city: 'Marseille',
      feedback:
        "J’ai essayé différents produits, mais avec Zigouplex Nightshot, c’est différent. Ce n’est pas une solution chimique lourde, c’est léger et rapide. Je l’ai utilisé une fois pour un rendez-vous surprise, et j’ai été bluffé par son efficacité. Plus besoin d'attendre des heures, c’est un vrai atout pour les moments spontanés.",
      rating: 4,
    },
    {
      id: '15',
      name: 'Karim',
      age: 44,
      city: 'Lille',
      feedback:
        'J’étais un peu sceptique au début, mais après avoir essayé, je ne peux plus m’en passer. L’effet est rapide, et le goût d’agrumes est frais. C’est vraiment idéal pour les moments où l’on n’a pas le temps de réfléchir. C’est discret, rapide et ça me permet de me sentir bien plus confiant.',
      rating: 5,
    },
    {
      id: '16',
      name: 'Nicolas',
      age: 38,
      city: 'Bordeaux',
      feedback:
        'Zigouplex Nightshot a vraiment changé la donne pour moi. Ce n’est pas juste un produit efficace, c’est aussi un produit pratique. Quand j’ai des plans de dernière minute, il suffit de boire un stick et je suis prêt. C’est discret, rapide et surtout, c’est toujours efficace. Je n’ai plus de souci de performance, et je peux profiter du moment sans penser à quoi que ce soit.',
      rating: 5,
    },
    {
      id: '17',
      name: 'François',
      age: 50,
      city: 'Strasbourg',
      feedback:
        "Un ami m’a recommandé Zigouplex Nightshot, et j’ai été agréablement surpris. Je n'avais jamais utilisé ce genre de produit, mais je l’ai trouvé efficace immédiatement. Le format liquide est parfait pour les situations où je n’ai pas le temps de prendre des comprimés. En quelques minutes, j'étais à la hauteur. Je suis maintenant un utilisateur fidèle.",
      rating: 4,
    },
    {
      id: '18',
      name: 'Olivier',
      age: 36,
      city: 'Nice',
      feedback:
        'Le goût agréable d’agrumes et l’effet rapide de Zigouplex Nightshot font toute la différence. C’est exactement ce que j’attendais : une solution rapide et efficace sans tracas. Maintenant, je suis toujours prêt, et je n’ai plus jamais à me soucier du timing. Un grand soulagement !',
      rating: 5,
    },
    {
      id: '19',
      name: 'Louis',
      age: 48,
      city: 'Nantes',
      feedback:
        'Zigouplex Nightshot a eu un impact immédiat. J’étais un peu nerveux au départ, mais la prise était simple et rapide. Je n’ai ressenti aucun effet secondaire, juste une grande confiance retrouvée. Le goût léger a été un vrai plus.',
      rating: 5,
    },
    {
      id: '20',
      name: 'Eric',
      age: 42,
      city: 'Montpellier',
      feedback:
        'Un excellent produit pour un résultat instantané. Je recommande vivement à ceux qui veulent avoir une solution rapide et discrète. J’ai utilisé Zigouplex Nightshot lors d’un rendez-vous, et j’ai été impressionné par l’efficacité. Très satisfait.',
      rating: 4,
    },
  ],

  ZigouplexEnduranceGel: [
    {
      id: '21',
      name: 'Marc',
      age: 39,
      city: 'Paris',
      feedback:
        "Zigouplex Endurance Gel est exactement ce dont j'avais besoin. Avant, je manquais souvent d’énergie dans les moments cruciaux, mais ce gel me permet de tenir plus longtemps, tout en restant calme et concentré. Je le recommande vivement à ceux qui cherchent à booster leur endurance.",
      rating: 5,
    },
    {
      id: '22',
      name: 'Jérôme',
      age: 43,
      city: 'Lyon',
      feedback:
        'Je l’utilise en complément de ma routine sportive, et les résultats sont impressionnants. L’énergie est plus stable, et je me sens moins fatigué après les efforts intenses. Ce produit me permet de tenir plus longtemps, ce qui est exactement ce que je recherchais.',
      rating: 4,
    },
    {
      id: '23',
      name: 'David',
      age: 37,
      city: 'Marseille',
      feedback:
        'Zigouplex Endurance Gel a parfaitement rempli son rôle lors de mes séances de sport. Je ressens un regain d’énergie au bout de quelques minutes, et ma récupération est plus rapide. C’est un excellent produit pour ceux qui veulent optimiser leur performance, je suis très satisfait.',
      rating: 4,
    },
    {
      id: '24',
      name: 'Antoine',
      age: 40,
      city: 'Bordeaux',
      feedback:
        'Je suis un grand sportif, et après quelques semaines d’utilisation, je vois clairement une différence. Moins de fatigue après mes entraînements, plus d’énergie et un effet de concentration beaucoup plus marqué. Je recommande sans hésiter !',
      rating: 5,
    },
    {
      id: '25',
      name: 'Lucas',
      age: 35,
      city: 'Nice',
      feedback:
        'Je n’étais pas sûr au début, mais après quelques tests, je suis conquis. Le gel agit rapidement et donne une vraie sensation de fraîcheur, idéal avant un effort intense. Je m’en sers régulièrement et je vois des résultats sur ma performance et mon énergie.',
      rating: 4,
    },
  ],

  ZigouplexInfinityGummies: [
    {
      id: '26',
      name: 'Alexandre',
      age: 32,
      city: 'Paris',
      feedback:
        'Les Zigouplex Infinity Gummies sont super pratiques et efficaces. Je les prends tous les jours, et je vois une amélioration notable dans mon énergie et ma concentration. En plus, le goût est agréable, ce qui les rend encore plus agréables à prendre.',
      rating: 5,
    },
    {
      id: '27',
      name: 'Sophie',
      age: 29,
      city: 'Lyon',
      feedback:
        'Très satisfaite des effets de ces gummies. Ma concentration s’est améliorée, et j’ai plus d’énergie tout au long de la journée. Le format est pratique, et ils sont très agréables à manger. Une solution simple et efficace pour rester au top.',
      rating: 5,
    },
    {
      id: '28',
      name: 'Philippe',
      age: 45,
      city: 'Marseille',
      feedback:
        'J’ai testé Zigouplex Infinity Gummies sur les conseils d’un ami, et je ne regrette pas du tout. Depuis que je les prends, je me sens plus énergique et moins fatigué. Le goût est aussi délicieux, ce qui ne gâche rien.',
      rating: 4,
    },
    {
      id: '29',
      name: 'Céline',
      age: 33,
      city: 'Bordeaux',
      feedback:
        'Zigouplex Infinity Gummies m’ont vraiment aidé à améliorer mon bien-être au quotidien. Moins de coups de fatigue, plus de concentration et un goût sucré agréable. Je ne peux plus m’en passer.',
      rating: 5,
    },
    {
      id: '30',
      name: 'Thomas',
      age: 40,
      city: 'Nice',
      feedback:
        'Je prends ces gummies tous les matins, et j’ai noté une vraie différence. J’ai plus d’énergie et moins de stress. C’est un excellent complément pour rester performant au travail et pendant mes activités quotidiennes.',
      rating: 4,
    },
  ],
};
