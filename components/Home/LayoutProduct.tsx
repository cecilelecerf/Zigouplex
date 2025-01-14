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
            <CardProduct title={value.name} txt={value.description} product={value} />
          </Link>
        ))}
    </Group>
    <Link href="/catalog">
      <Button color="orange" w="fit-content">
        Découvrir + de produit {'->'}
      </Button>
    </Link>
  </Stack>
);

const CardProduct = ({ title, txt, product }: CardProps & { title: string; txt: string; product: any }) => (
  <Card
    w="100%"
    style={{ overflow: 'hidden' }}
    maw={400}
    shadow="sm"
    miw={200}
    itemScope
    itemType="https://schema.org/Product"
  >
    <CardSection>
      <Image src={MonImage} component={NextImage} alt={title} h={300} loading="lazy" itemProp="image" />
    </CardSection>
    <Box p="md" td="none">
      <Title order={2} td="none" itemProp="name">{title}</Title>
      <Text lineClamp={3} itemProp="description">{txt}</Text>
      <meta itemProp="url" content={`/catalog/product/${product.id}`} />
      <meta itemProp="sku" content={product.id} />
      <meta itemProp="priceCurrency" content="EUR" />
      <meta itemProp="price" content={product.price} />
    </Box>
  </Card>
);
