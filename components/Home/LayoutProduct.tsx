import NextImage from 'next/image';
import Link from 'next/link';
import {
  Box,
  Button,
  Card,
  CardProps,
  CardSection,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import MonImage from '../../components/assets/image.png';
import { products } from '../data/product';

export const LayoutProduct = () => (

  <Stack align="center">
    <Group gap="xl" justify="center">
      {Object.entries(products)
        .slice(0, 3)
        .map(([_key, value], index) => (
          <Link key={index} href={`/catalog/product/${value.id}`} style={{ textDecoration: "none" }}>
            <CardProduct title={value.name} txt={value.description} />
          </Link>
        ))}
    </Group>
    <Link href="/catalog" >
      <Button color="orange" w="fit-content">

        Découvrir + de produit {'->'}
      </Button>
    </Link>
  </Stack>
);
const CardProduct = ({ title, txt }: CardProps & { title: string; txt: string }) => (
  <Card w="100%" style={{ overflow: 'hidden' }} maw={400} shadow="sm" miw={200} >
    <CardSection>
      <Image src={MonImage} component={NextImage} alt="lala" h={300} loading="lazy" />
    </CardSection>
    <Box p="md" td="none">
      <Title order={2} td="none">{title}</Title>
      <Text lineClamp={3}>{txt}</Text>
    </Box>
  </Card>
);
