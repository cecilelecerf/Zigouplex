import { Box, Flex, Space } from '@mantine/core';
import { CardProduct } from '@/components/CardProduct';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <Box mx="xl">
      <Welcome />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Flex gap="md" mb="xl">
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
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <section>
        <CardProduct
          display="flex"
          imageProps={{ mah: 200 }}
          title="article sur..."
          txt="        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
        />
      </section>
      <ColorSchemeToggle />
    </Box>
  );
}
