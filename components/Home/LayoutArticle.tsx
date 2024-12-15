import NextImage from 'next/image';
import { Box, Button, Card, Image, Stack, Text, Title } from '@mantine/core';
import { Article } from '../data/blog/topics';

export const LayoutArticle = ({ article }: { article: Article }) => (
  <section>
    <Stack align="end">

      <Card
        w="100%"
        style={{ overflow: 'hidden', flexDirection: 'row' }}
        display="flex"
        dir="row"
        shadow="sm"
      >
        <Image
          src={article.picture}
          component={NextImage}
          alt="lala"
          maw={400}
          h={200}
          radius="sm"
          mr="lg"
        />

        <Box>
          <Title order={2}>{article.name}</Title>
          <Text>{article.description}</Text>
        </Box>
      </Card>
      <Button color='orange'>Découvrir + d'article</Button>
    </Stack>
  </section>
);
