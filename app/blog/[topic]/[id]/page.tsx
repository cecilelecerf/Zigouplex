'use client';
// Marque le fichier comme un composant client
import NextImage from 'next/image';
import { Text, Title } from '@mantine/core';
import { useParams } from 'next/navigation';
import { blog } from '@/public/data/blog/topics';

export default function Product() {
    const params = useParams();
    const { id, topic } = params;

    if (id && typeof id === "string" && topic && typeof topic === "string") {
        const article = blog[topic].articles[Number(id)]
        return (
            <>
                <Title ta="center" my={100}>
                    <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
                        {article.name}
                    </Text>
                </Title>
                {article.content}
            </>

        );
    }
    else {
        return (<>Error</>)
    }
}
