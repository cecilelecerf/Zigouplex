import NextImage from 'next/image';
import { Box, Button, Card, Group, Image, Paper, Stack, Text, Title } from '@mantine/core';
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
        >
          <Group>

            <Image
              src={article.picture}
              component={NextImage}
              alt="lala"
              maw={400}
              h={200}
              radius="sm"
              mr="lg"
              loading="lazy"

            />

            <Box maw={400}>
              <Title order={3}>{article.name}</Title>
              <Text lineClamp={4}>{article.description}</Text>
            </Box>
          </Group>
        </Paper>
      </Link>
      <Link href="/blog">
        <Button color='orange'>Découvrir + d'article</Button>
      </Link>
    </Stack>

  </section >
);
