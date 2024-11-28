import NextImage from 'next/image';
import { Box, Card, CardProps, CardSection, Flex, Image, Text, Title } from '@mantine/core';
import MonImage from '@/app/assets/image.png';

export const LayoutProduct = () => (
  <Flex gap="md" mb="xl" justify="space-between">
    <CardProduct
      title="Zigouplex Classique"
      txt="        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
    />
    <CardProduct
      title="Zigouplex Classique"
      txt="        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
    />
    <CardProduct
      title="Zigouplex Classique"
      txt="        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
    />
  </Flex>
);
const CardProduct = ({ title, txt }: CardProps & { title: string; txt: string }) => (
  <Card w="100%" style={{ overflow: 'hidden' }} maw={400} shadow="sm">
    <CardSection>
      <Image src={MonImage} component={NextImage} alt="lala" h={350} />
    </CardSection>
    <Box p="md">
      <Title order={2}>{title}</Title>
      <Text>{txt}</Text>
    </Box>
  </Card>
);
