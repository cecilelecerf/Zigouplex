import NextImage from 'next/image';
import { Box, Button, Group, Image, Paper, Stack, Text, Title } from '@mantine/core';
import { Article } from '../data/blog/topics';
import Link from 'next/link';

export const LayoutArticle = ({ article }: { article: Article }) => (
  <section>
    <Stack align="end">
      <Link href={`/blog/sante-mentale/${article.id}`} style={{ textDecoration: "none", width: "100%" }} >
        <Paper
          w="100%"
          style={{ overflow: 'hidden' }}
          shadow="sm"
          p="md"
          c="dark"
          itemScope
          itemType="https://schema.org/Article"
        >
          <Group align='center'>
            <Image
              src={article.picture}
              component={NextImage}
              alt={article.name}
              h={300}
              w="100%"
              fit="cover"
              radius="sm"
              mr="lg"
              loading="lazy"
              itemProp="image"
            />

            <Box maw={400}>
              <Title order={3} itemProp="headline">{article.name}</Title>
              <Text lineClamp={4} itemProp="description">{article.description}</Text>
            </Box>
          </Group>
        </Paper>
      </Link>

      <Link href="/blog">
        <Button color='orange'>Découvrir + d'article</Button>
      </Link>
    </Stack>
  </section>
);
