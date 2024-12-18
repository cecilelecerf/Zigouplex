import { Card, Center, Flex, Group, Rating, Text, Title } from '@mantine/core';
import { Testimonial, testimonials } from '../data/testimonials';

export const LayoutTestimonial = () => (
  <section>
    <Title order={2} mb="md">
      Ce qu'ils pensent de nous
    </Title>
    <Group gap="md" justify='center'>
      {testimonials[0].slice(0, 3).map((testimonial, i) => (
        <CardPeople testimonial={testimonial} key={i} />
      ))}
    </Group>
  </section>
);

const CardPeople = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card shadow="md" maw={300}>
    <Center mb="md">
      <Rating defaultValue={testimonial.rating} />
    </Center>
    <Text ta="center" lineClamp={3}>
      {testimonial.feedback}{' '}
    </Text>
    <Text ta="center" fz="sm" fs="italic">
      {testimonial.name}
    </Text>
  </Card>
);
