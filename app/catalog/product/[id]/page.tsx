'use client';
// Marque le fichier comme un composant client
import NextImage from 'next/image';
import { Accordion, AccordionControl, AccordionItem, AccordionPanel, Avatar, Card, Flex, Group, Image, List, ListItem, Pill, Popover, PopoverDropdown, PopoverTarget, Rating, Space, Stack, Text, Title } from '@mantine/core';
import { products } from '../../../../components/data/product';
import { useParams } from 'next/navigation';
import { testimonials } from '../../../../components/data/testimonials';
// import { Metadata } from 'next';

export default function Product() {
  const params = useParams();
  const { id } = params;


  if (id && typeof id === "string") {
    const product = products[Number(id)]

    const dataAccordion = [
      {
        value: "Avantages",
        description: <List>{product.keyAdvantages?.map((keyAdvantages, i) => <ListItem key={i}>{keyAdvantages}</ListItem>)}</List>
      },
      {
        value: "Packaging",
        description: <Text>{product.packaging}</Text>
      },
      {
        value: "Informations",
        description: <List>{product.keyPoints?.map((keyPoints, i) => <ListItem key={i}>{keyPoints}</ListItem>)}</List>
      },
      {
        value: "Thème",
        description: <Text>{product.theme}</Text>
      }
    ]
    return (
      <>
        <header>

          <Title ta="center" my={100}>
            <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
              {product.name}
            </Text>
            {product.slogan && (
              <Text>
                {product.slogan}
              </Text>

            )}
          </Title>
        </header>
        <Group gap="xl">
          <Image src={product.cover} component={NextImage} alt="#" maw={300} h={200} loading="lazy" />
          <Stack maw={550}>

            <Text>
              {product.description}
            </Text>
            {product.keyComposition && (
              <Group >{product.keyComposition.map((keyComposition, index) => (<Popover key={index}>
                <PopoverTarget><Pill  >{keyComposition.ingredient}</Pill></PopoverTarget>
                <PopoverDropdown>{keyComposition.benefit}</PopoverDropdown>
              </Popover>))}</Group>

            )}
          </Stack>
        </Group>
        <Space h="xl" />
        <Accordion >
          {dataAccordion.map((data, i) =>
            <AccordionItem key={i} value={data.value}>
              <AccordionControl>
                {data.value}
              </AccordionControl>
              <AccordionPanel>
                {data.description}
              </AccordionPanel>
            </AccordionItem>
          )}
        </Accordion>
        <Space h={75} />
        <Group justify="center" >
          {testimonials[Number(product.id)].map((testimonial, i) =>
            <Card key={i} shadow="md" maw={500}>
              <Group justify='space-between' mb="sm">
                <Flex align="center" gap="md">
                  <Avatar />
                  <Text>{testimonial.name} <Text span c="gray" fs="italic">- {testimonial.age} ans - {testimonial.city}</Text> </Text>
                </Flex>
                <Rating defaultValue={testimonial.rating} />
              </Group>
              <Text>
                {testimonial.feedback}
              </Text>
            </Card>
          )}
        </Group>

      </  >

    );
  }
  else {
    return (

      <Text color="red" size="xl">Produit non trouvé. Veuillez vérifier l'URL.</Text>
    );
  }
}
