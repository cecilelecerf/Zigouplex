'use client';

import NextImage from 'next/image';
import {
  Box,
  Card,
  Center,
  Group,
  Image,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { boxs } from '../../../../components/data/product';
import { useParams } from 'next/navigation';

export default function Product() {
  const { id } = useParams();

  // Vérifie si l'ID est valide
  if (!id || isNaN(Number(id))) {
    return <>Erreur : Box non trouvée.</>;
  }

  const box = boxs[Number(id)];
  const theme = useMantineTheme();

  return (
    <div itemScope itemType="https://schema.org/Product">
      {/* Titre de la box */}
      <Stack align="center">
        <Title ta="center">
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: 'pink', to: 'yellow' }}
            itemProp="name"
          >
            {box.name}
          </Text>
        </Title>
        {box.slogan && (
          <Text maw={600} ta="center" itemProp="slogan">
            {box.slogan}
          </Text>
        )}
      </Stack>

      <Space h="75" />

      {/* Image de la box */}
      <Group gap="xl">
        <Image
          src={box.cover}
          component={NextImage}
          alt={'Image du produit'}
          maw={300}
          h={200}
          loading="lazy"
          itemProp="image"
        />
        <Stack maw={550}>
          <Text itemProp="description">{box.description}</Text>

        </Stack>
      </Group>

      <Space h="75" />

      {/* Contenu de la box */}
      <Box>
        <Title order={2} my="md">
          Inclut dans la box
        </Title>
        <Center>
          <Group gap="md">
            {box.contenu.map((content, i) => (
              <Card key={i} shadow="md" maw={500} w="100%" itemScope itemType="https://schema.org/Offer">
                <Text fw="bold" fz="xl" itemProp="name">
                  {content.name}
                </Text>
                <Text itemProp="description">{content.description}</Text>
              </Card>
            ))}
          </Group>
        </Center>
      </Box>
    </div>
  );
}
