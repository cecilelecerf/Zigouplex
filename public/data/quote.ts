// Définition des types pour les témoignages
interface Testimonial {
  name: string;
  profession: string;
  quote: string;
}

// Données des témoignages des médecins
export const quote: Testimonial[] = [
  {
    name: 'Dr. Jean-Luc Besson',
    profession: 'Médecin spécialiste en urologie',
    quote:
      'En tant que médecin spécialisé dans les troubles érectiles, je recommande Zigouplex pour son approche naturelle et sa formulation soigneusement étudiée. Les ingrédients tels que la L-arginine, le ginseng et le maca ont prouvé leur efficacité pour améliorer la circulation sanguine et soutenir la vitalité masculine, sans effets secondaires notables.',
  },
  {
    name: 'Dr. Sophie Lemoine',
    profession: 'Endocrinologue et spécialiste de la santé hormonale',
    quote:
      "Le Zigouplex se distingue par sa composition d’ingrédients naturels qui favorisent l’équilibre hormonal et la performance sexuelle. J'apprécie particulièrement la sécurité de cette solution qui aide les hommes à retrouver leur vitalité de manière progressive et durable.",
  },
  {
    name: 'Dr. Thomas Delmas',
    profession: 'Médecin généraliste et expert en santé préventive',
    quote:
      'Je conseille souvent Zigouplex à mes patients qui souhaitent améliorer leur bien-être général et leur performance sexuelle de façon naturelle. Son action ciblée sur la circulation sanguine et la stimulation de la libido est une approche efficace pour traiter les troubles sexuels de manière discrète et sans risque.',
  },
];
