'use client';
// Marque le fichier comme un composant client
import NextImage from 'next/image';
import { Box, Card, Image, SimpleGrid, Space, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { boxs } from '../../../../components/data/product';
import { useParams } from 'next/navigation';

export default function Product() {
  const params = useParams();
  const { id } = params;

  if (id && typeof id === "string") {
    const box = boxs[Number(id)]
    const theme = useMantineTheme()

    return (
      <>
        <Stack align="center">
          <Title ta="center">
            <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
              {box.name}
            </Text>
          </Title>
          {box.slogan && (
            <Text maw={600} ta="center">
              {box.slogan}
            </Text>

          )}
        </Stack>
        <Space h="75" />
        <Image src={box.cover} component={NextImage} alt='lal' style={{ borderRadius: theme.radius.md }} loading="lazy" />
        <Space h="75" />
        <Box>
          <Title order={2} my="md">Inclut dans la box</Title>
          <SimpleGrid cols={2}>
            {box.contenu.map((content, i) =>
              <Card key={i} shadow="md">
                <Text fw="bold" fz="xl">{content.name}</Text>
                <Text>{content.description}</Text>
              </Card>)}

          </SimpleGrid>
        </Box>
      </>
    );
  }
  else {
    return (<>Erro</>)
  }
}
