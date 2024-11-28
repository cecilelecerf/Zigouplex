'use client';
// Marque le fichier comme un composant client
import NextImage from 'next/image';
import { Badge, Box, Card, CardSection, Flex, Group, Image, Pill, Popover, PopoverDropdown, PopoverTarget, SimpleGrid, Space, Stack, Text, Title } from '@mantine/core';
import { products } from '@/public/data/product';
import { useParams } from 'next/navigation';

export default function Product() {
  const params = useParams();
  const { id } = params; // 'id' correspond au nom du paramètre dynamique dans l'URL

  if (id && typeof id === "string") {
    const product = products[Number(id)]
    console.log(product);
    return (
      <Box mx="xl">
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
        <Group gap="xl">
          <Image src={product.cover} component={NextImage} alt="#" maw={300} h={200} />
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


      </Box>
    );
  }
  else {
    return (<>Erro</>)
  }
}
