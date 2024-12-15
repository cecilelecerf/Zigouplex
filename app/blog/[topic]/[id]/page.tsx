'use client';
// Marque le fichier comme un composant client
import NextImage from 'next/image';
import { Text, Title, Image, Flex, Paper } from '@mantine/core';
import { useParams } from 'next/navigation';
import { blog } from '../../../../components/data/blog//topics';

export default function Product() {
    const params = useParams();
    const { id, topic } = params;

    if (id && typeof id === "string" && topic && typeof topic === "string") {
        const article = blog[topic].articles[Number(id)]

        return (

            <>
                <header>
                    <Title order={1} ta="center" my="lg">
                        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>       {article.name}</Text>


                    </Title>
                    <Paper shadow="md">
                        <Flex gap="md">
                            <Image component={NextImage} src={article.picture} alt='la' maw={300} h={200} loading="lazy" />
                            <Text component="p" p="md" >
                                {article.description}
                            </Text>
                        </Flex>
                    </Paper>
                </header>

                {article.content}
            </>

        );
    }
    else {
        return (<>Error</>)
    }
}
