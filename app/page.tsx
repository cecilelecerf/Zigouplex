import { IconSpeakerphone } from '@tabler/icons-react';
import { Blockquote, Box, Space } from '@mantine/core';
import { LayoutArticle } from '@/components/Home/LayoutArticle';
import { LayoutProduct } from '@/components/Home/LayoutProduct';
import { LayoutTestimonial } from '@/components/Home/LayoutTestimonial';
import { blog } from '@/public/data/blog/topics';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <Space h={150} />
      <LayoutProduct />
      <Space h={75} />
      <Blockquote
        cite="Dr. Jean-Luc Besson, Médecin spécialiste en urologie"
        color="orange"
        icon={<IconSpeakerphone />}
      >
        En tant que médecin spécialisé dans les troubles érectiles, je recommande Zigouplex pour son
        approche naturelle et sa formulation soigneusement étudiée. Les ingrédients tels que la
        L-arginine, le ginseng et le maca ont prouvé leur efficacité pour améliorer la circulation
        sanguine et soutenir la vitalité masculine, sans effets secondaires notables.{' '}
      </Blockquote>

      <Space h={75} />
      <LayoutArticle article={blog["sante-mentale"].articles[0]} />
      <Space h={150} />
      <LayoutTestimonial />
      <ColorSchemeToggle />
    </>

  );
}
