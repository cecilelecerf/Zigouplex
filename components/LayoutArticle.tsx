import NextImage from 'next/image';
import { Box, Card, Image, Text, Title } from '@mantine/core';
import MonImage from '@/app/assets/image.png';

export const LayoutArticle = () => (
  <section>
    <Card
      w="100%"
      style={{ overflow: 'hidden', flexDirection: 'row' }}
      display="flex"
      dir="row"
      shadow="sm"
    >
      <Image
        src={MonImage}
        component={NextImage}
        alt="lala"
        maw={400}
        h={200}
        radius="sm"
        mr="lg"
      />

      <Box>
        <Title order={2}>article sur...</Title>
        <Text>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
        </Text>
      </Box>
    </Card>
  </section>
);
