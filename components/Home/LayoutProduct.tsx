import NextImage from 'next/image';
import Link from 'next/link';
import {
  Box,
  Button,
  Card,
  CardProps,
  CardSection,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import MonImage from '../../components/assets/image.png';
import { Product, products } from '../data/product';

export const LayoutProduct = () => (
  <Stack align="center">
    <Flex gap="xl" justify="center" direction={{ base: 'column', sm: 'row' }}>
      {Object.entries(products)
        .slice(0, 3)
        .map(([_key, value], index) => (
          <Link key={index} href={`/catalog/product/${value.id}`} style={{ textDecoration: "none" }}>
            <CardProduct product={value} />
          </Link>
        ))}
    </Flex>
    <Link href="/catalog">
      <Button color="orange" w="fit-content">
        Découvrir + de produit {'->'}
      </Button>
    </Link>
  </Stack>
);

const CardProduct = ({ product }: CardProps & { product: Product }) => (
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
      <Image src={product.cover} component={NextImage} alt={product.alt} h={300} height={300} loading="lazy" itemProp="image" />
    </CardSection>
    <Box p="md" td="none">
      <Title order={2} td="none" itemProp="name">{product.name}</Title>
      <Text lineClamp={3} itemProp="description">{product.description}</Text>
      <meta itemProp="url" content={`/catalog/product/${product.id}`} />
      <meta itemProp="sku" content={product.id} />
      <meta itemProp="priceCurrency" content="EUR" />
      <meta itemProp="price" content={product.price.toString()} />
    </Box>
  </Card>
);
