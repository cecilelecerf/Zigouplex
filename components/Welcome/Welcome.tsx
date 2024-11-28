import { Anchor, Button, Center, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export const Welcome = () => {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Zigouplex
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Bienvenue chez Zigouplex, le médicament naturel contre les troubles d’érection. Notre gamme de produits est conçue pour vous redonner confiance et vitalité.
      </Text>
      <Center mt="md">
        <Button color="orange">LALA</Button>
      </Center>
    </>
  );
};
