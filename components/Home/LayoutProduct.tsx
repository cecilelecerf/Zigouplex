import NextImage from 'next/image';
import Link from 'next/link';
import {
  Box,
  Button,
  Card,
  CardProps,
  CardSection,
  Flex,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import MonImage from '@/app/assets/image.png';
import { products } from '@/public/data/product';

export const LayoutProduct = () => (
  <Stack align="center">
    <Flex gap="md" justify="space-between">
      {Object.entries(products)
        .slice(0, 3)
        .map(([_key, value], index) => (
          <CardProduct title={value.name} txt={value.description} key={index} />
        ))}
    </Flex>
    <Link href="/products">
      <Button color="orange" w="fit-content">
        {' '}
        Découvrir + de produit {'->'}
      </Button>
    </Link>
  </Stack>
);
const CardProduct = ({ title, txt }: CardProps & { title: string; txt: string }) => (
  <Card w="100%" style={{ overflow: 'hidden' }} maw={400} shadow="sm">
    <CardSection>
      <Image src={MonImage} component={NextImage} alt="lala" h={350} />
    </CardSection>
    <Box p="md">
      <Title order={2}>{title}</Title>
      <Text lineClamp={3}>{txt}</Text>
    </Box>
  </Card>
);
