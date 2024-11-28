import { Card, Center, Flex, Rating, Text, Title } from '@mantine/core';

export const PeopleThink = () => (
  <section>
    <Title order={2} mb="md">
      Ce qu'ils pensent de nous
    </Title>
    <Flex gap="md">
      <CardPeople />
      <CardPeople />
      <CardPeople />
    </Flex>
  </section>
);

const CardPeople = () => (
  <Card shadow="md">
    <Center mb="md">
      <Rating />
    </Center>
    <Text ta="center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    </Text>
  </Card>
);
