import NextImage from 'next/image';
import { Box, Card, CardSection, Image, SimpleGrid, Space, Text, Title } from '@mantine/core';
import { boxs, products } from '@/public/data/product';

export default function Blog() {
  return (
    <Box mx="xl">
      <Title ta="center" my={100}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Les produits Zigouplex
        </Text>
      </Title>

      <Box>
        <Title order={2}>Tous les zigouplex</Title>
        <SimpleGrid cols={3} mt="xl">
          {products.map((product) => (
            <Card
              w="100%"
              style={{ overflow: 'hidden', justifyContent: 'space-around' }}
              shadow="sm"
            >
              <CardSection>
                <Image src={product.cover} component={NextImage} alt="lala" h={200} />
              </CardSection>
              <Text ta="center" fw="bold" mt="md">
                {product.name}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
      <Space h={150} />

      <Title order={2}>Les box</Title>
      <SimpleGrid cols={3} mt="xl">
        {boxs.map((box) => (
          <Card w="100%" style={{ overflow: 'hidden', justifyContent: 'space-around' }} shadow="sm">
            <CardSection>
              <Image src={box.cover} component={NextImage} alt="lala" h={200} />
            </CardSection>
            <Text ta="center" fw="bold" mt="md">
              {box.name}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
