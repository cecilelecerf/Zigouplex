import NextImage from 'next/image';
import { Box, Card, Image, Text, Title } from '@mantine/core';
import { Article } from '@/public/data/blog/topics';

export const LayoutArticle = ({ article }: { article: Article }) => (
  <section>
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
  </section>
);
