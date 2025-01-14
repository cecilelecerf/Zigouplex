// 'use client';

import NextImage from 'next/image';
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Card,
  Flex,
  Group,
  Image,
  List,
  ListItem,
  Pill,
  Popover,
  PopoverDropdown,
  PopoverTarget,
  Rating,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { products } from '../../../../components/data/product';
import { testimonials } from '../../../../components/data/testimonials';

export interface PageProps {
  params: Promise<{ id: string; topic: string }>;
}
export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;

  // Vérifie si l'ID est valide et récupère les informations du produit
  if (!id || isNaN(Number(id))) {
    return {
      title: 'Produit non trouvé',
      openGraph: {
        title: 'Produit non trouvé',
        description: 'Produit introuvable dans notre base de données.',
      },
    };
  }

  const product = products[Number(id)];

  if (!product) {
    return {
      title: 'Produit non trouvé',
      openGraph: {
        title: 'Produit non trouvé',
        description: 'Produit introuvable dans notre base de données.',
      },
    };
  }

  // Métadonnées dynamiques basées sur le produit
  return {
    title: product.metaTitle || product.name,
    description: product.metaDescription || product.description,
    openGraph: {
      title: product.metaTitle || product.name,
      description: product.metaDescription || product.description,
    },
  };
}

export default async function Product({ params }: PageProps) {
  const { id } = await params;
  if (!id || isNaN(Number(id))) {
    return <Text c="red" size="xl">Produit non trouvé. Veuillez vérifier l'URL.</Text>;
  }

  const product = products[Number(id)];

  if (!product) {
    return <Text c="red" size="xl">Produit non trouvé. Veuillez vérifier l'URL.</Text>;
  }

  const dataAccordion = [
    {
      value: 'Avantages',
      description: (
        <List>
          {product.keyAdvantages?.map((advantage, i) => (
            <ListItem key={i}>{advantage}</ListItem>
          ))}
        </List>
      ),
    },
    {
      value: 'Packaging',
      description: <Text>{product.packaging}</Text>,
    },
    {
      value: 'Informations',
      description: (
        <List>
          {product.keyPoints?.map((point, i) => (
            <ListItem key={i}>{point}</ListItem>
          ))}
        </List>
      ),
    },
    {
      value: 'Thème',
      description: <Text>{product.theme}</Text>,
    },
  ];

  return (
    <>

      <div itemScope itemType="https://schema.org/Product">
        <header>
          <Title ta="center" my={100}>
            <Text
              inherit
              variant="gradient"
              component="span"
              gradient={{ from: 'pink', to: 'yellow' }}
              itemProp="name"
            >
              {product.name}
            </Text>
            {product.slogan && (
              <Text itemProp="slogan">
                {product.slogan}
              </Text>
            )}
          </Title>
        </header>

        <Group gap="xl">
          <Image
            src={product.cover}
            component={NextImage}
            alt={product.alt || 'Image du produit'}
            maw={300}
            h={200}
            loading="lazy"
            itemProp="image"
          />
          <Stack maw={550}>
            <Text itemProp="description">{product.description}</Text>
            {product.keyComposition && (
              <Group>
                {product.keyComposition.map((composition, index) => (
                  <Popover key={index}>
                    <PopoverTarget>
                      <Pill>{composition.ingredient}</Pill>
                    </PopoverTarget>
                    <PopoverDropdown>{composition.benefit}</PopoverDropdown>
                  </Popover>
                ))}
              </Group>
            )}
          </Stack>
        </Group>

        <Space h="xl" />

        <Accordion>
          {dataAccordion.map((data, i) => (
            <AccordionItem key={i} value={data.value}>
              <AccordionControl>{data.value}</AccordionControl>
              <AccordionPanel>{data.description}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>

        <Space h={75} />

        <Group justify="center">
          {testimonials[Number(product.id)]?.map((testimonial, i) => (
            <Card key={i} shadow="md" maw={500}>
              <Group justify="space-between" mb="sm">
                <Flex align="center" gap="md">
                  <Avatar />
                  <Text>
                    <span itemProp="author">{testimonial.name}</span>{' '}
                    <Text span c="gray" fs="italic">
                      - {testimonial.age} ans - {testimonial.city}
                    </Text>
                  </Text>
                </Flex>
                <Rating defaultValue={testimonial.rating} readOnly itemProp="aggregateRating" />
              </Group>
              <Text itemProp="reviewBody">{testimonial.feedback}</Text>
            </Card>
          ))}
        </Group>
      </div>
    </>
  );
}
