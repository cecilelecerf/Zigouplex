import NextImage from 'next/image';
import { Box, Image, ImageProps, Paper, PaperProps, Text, Title } from '@mantine/core';
import MonImage from '@/app/assets/image.png';

export const CardProduct = ({
  title,
  txt,
  imageProps,
  ...props
}: PaperProps & { title: string; txt: string; imageProps?: ImageProps }) => (
  <Paper withBorder w="100%" {...props} style={{ overflow: 'hidden' }}>
    <Image src={MonImage} component={NextImage} alt="lala" maw={400} h={350} {...imageProps} />
    <Box p="md">
      <Title order={2}>{title}</Title>
      <Text>{txt}</Text>
    </Box>
  </Paper>
);
