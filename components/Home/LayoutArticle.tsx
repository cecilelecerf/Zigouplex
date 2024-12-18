import NextImage from 'next/image';
import { Box, Button, Card, Group, Image, Paper, Stack, Text, Title } from '@mantine/core';
import { Article } from '../data/blog/topics';

export const LayoutArticle = ({ article }: { article: Article }) => (
  <section>
    <Stack align="end">

      <Paper
        w="100%"
        style={{ overflow: 'hidden' }}
        shadow="sm"
        p="md"
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
      <Button color='orange'>Découvrir + d'article</Button>
    </Stack>

  </section>
);
