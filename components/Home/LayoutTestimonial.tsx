import { Card, Center, Group, Rating, Text, Title } from '@mantine/core';
import { Testimonial, testimonials } from '../data/testimonials';

export const LayoutTestimonial = () => (
  <section>
    {/* Titre de la section */}
    <Title order={2} mb="md">
      Ce qu'ils pensent de nous
    </Title>

    {/* Groupe d'avis */}
    <Group gap="md" justify="center">
      {testimonials[0].slice(0, 3).map((testimonial, i) => (
        <CardPeople testimonial={testimonial} key={i} />
      ))}
    </Group>
  </section>
);

const CardPeople = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card
    shadow="md"
    maw={300}
    itemScope
    itemType="https://schema.org/Review"
  >
    {/* Note attribuée */}
    <Center mb="md" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
      <Rating
        defaultValue={testimonial.rating}
        readOnly
        itemProp="ratingValue"
        title={`Note : ${testimonial.rating}/5`}
      />
      <meta itemProp="bestRating" content="5" />
      <meta itemProp="worstRating" content="1" />
    </Center>

    {/* Contenu de l'avis */}
    <Text ta="center" lineClamp={3} itemProp="reviewBody">
      {testimonial.feedback}
    </Text>

    {/* Nom de l'auteur */}
    <Text ta="center" fz="sm" fs="italic" itemProp="author">
      {testimonial.name}
    </Text>
  </Card>
);
