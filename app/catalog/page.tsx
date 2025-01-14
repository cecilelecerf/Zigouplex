import NextImage from 'next/image';
import Link from 'next/link';
import {
  Box,
  Card,
  CardSection,
  Image,
  SimpleGrid,
  Space,
  Text,
  Title,
} from '@mantine/core';
import { boxs, products } from '../../components/data/product';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'test',
};

export default function Catalog() {
  return (
    <div>
      {/* Titre principal */}
      <Title ta="center" my={100}>
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'pink', to: 'yellow' }}
        >
          Les produits Zigouplex
        </Text>
      </Title>

      {/* Liste des produits */}
      <Box>
        <Title order={2}>Tous les zigouplex</Title>
        <SimpleGrid cols={2} mt="xl">
          {products.map((product, i) => (
            <Link
              href={`/catalog/product/${product.id}`}
              key={i}
              style={{ textDecoration: 'none' }}
            >
              <Card
                w="100%"
                style={{ overflow: 'hidden', justifyContent: 'space-around' }}
                shadow="sm"
                itemScope
                itemType="https://schema.org/Product"
              >
                <CardSection>
                  <Image
                    src={product.cover}
                    component={NextImage}
                    alt={product.alt || 'Image produit'}
                    h={200}
                    loading="lazy"
                    itemProp="image"
                  />
                </CardSection>
                <Text ta="center" fw="bold" mt="md" itemProp="name">
                  {product.name}
                </Text>
              </Card>
            </Link>
          ))}
        </SimpleGrid>
      </Box>

      <Space h={150} />

      {/* Liste des box */}
      <Title order={2}>Les box</Title>
      <SimpleGrid cols={2} mt="xl">
        {boxs.map((box, i) => (
          <Link
            href={`/catalog/box/${box.id}`}
            key={i}
            style={{ textDecoration: 'none' }}
          >
            <Card
              w="100%"
              style={{ overflow: 'hidden', justifyContent: 'space-around' }}
              shadow="sm"
              itemScope
              itemType="https://schema.org/Product"
            >
              <CardSection>
                <Image
                  src={box.cover}
                  component={NextImage}
                  alt={box.name || 'Image box'}
                  h={200}
                  loading="lazy"
                  itemProp="image"
                />
              </CardSection>
              <Text ta="center" fw="bold" mt="md" itemProp="name">
                {box.name}
              </Text>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </div>
  );
}
