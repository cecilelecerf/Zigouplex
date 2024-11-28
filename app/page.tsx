import { IconSpeakerphone } from '@tabler/icons-react';
import { Blockquote, Box, Space } from '@mantine/core';
import { LayoutArticle } from '@/components/LayoutArticle';
import { PeopleThink } from '@/components/LayoutPeopleThink';
import { LayoutProduct } from '@/components/LayoutProduct';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <Box mx="xl">
      <Welcome />
      <Space h={150} />
      <LayoutProduct />
      <Space h={75} />
      <Blockquote cite="l'auteur" color="orange" icon={<IconSpeakerphone />}>
        La citatation Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </Blockquote>

      <Space h={75} />
      <LayoutArticle />
      <Space h={150} />
      <PeopleThink />
      <ColorSchemeToggle />
    </Box>
  );
}
