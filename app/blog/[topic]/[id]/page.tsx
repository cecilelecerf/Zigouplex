'use client';
// Marque le fichier comme un composant client
import NextImage from 'next/image';
import { Text, Title, Image, Flex, Paper, Group, Card } from '@mantine/core';
import { useParams } from 'next/navigation';
import { blog } from '../../../../components/data/blog//topics';
import { useViewportSize } from '@mantine/hooks';

export default function Product() {
    const params = useParams();
    const { id, topic } = params;
    const { width } = useViewportSize();

    if (id && typeof id === "string" && topic && typeof topic === "string") {
        const article = blog[topic].articles[Number(id)]

        return (

            <>
                <header>
                    <Title order={1} ta="center" my="lg">
                        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
                            {article.name}
                        </Text>
                    </Title>
                    <Card shadow="md" w="fit-content" mx="auto">
                        <Group gap="md" justify='center' w="fit-content" style={{ flexDirection: width > 950 ? "row" : "column" }}>
                            <Image component={NextImage} src={article.picture} alt='la' maw={300} h={200} loading="lazy" />
                            <Text component="p" p="md" w={width > 950 ? 500 : "100%"}>
                                {article.description}
                            </Text>
                        </Group>
                    </Card>
                </header>

                {article.content}
            </>

        );
    }
    else {
        return (<>Error</>)
    }
}
