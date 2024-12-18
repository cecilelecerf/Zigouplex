import { Anchor, Button, Center, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';
import Link from 'next/link';

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
        <Link href={`/catalog/`} style={{ textDecoration: "none" }}>
          <Button color="orange">Découvre tous les produits</Button>
        </Link>
      </Center>
    </>
  );
};
