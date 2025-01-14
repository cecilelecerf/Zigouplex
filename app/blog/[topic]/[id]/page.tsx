import NextImage from 'next/image';
import { Text, Title, Image, Group, Card, Flex } from '@mantine/core';
import { blog } from '../../../../components/data/blog//topics';
// import { useViewportSize } from '@mantine/hooks';
import { PageProps } from '@/app/catalog/product/[id]/page';

export async function generateMetadata({ params }: PageProps) {
    const { id, topic } = await params;

    // Vérifie si l'ID est valide et récupère les informations du produit
    if (!id || isNaN(Number(id))) {
        return {
            title: 'Article non trouvé',
            openGraph: {
                title: 'Article non trouvé',
                description: 'Article introuvable dans notre base de données.',
            },
        };
    }

    const article = blog[topic].articles[Number(id)];

    if (!article) {
        return {
            title: 'Produit non trouvé',
            openGraph: {
                title: 'Produit non trouvé',
                description: 'Produit introuvable dans notre base de données.',
            },
        };
    }

    // Métadonnées dynamiques basées sur le produit
    return {
        title: article.metaTitle || article.name,
        description: article.metaDescription || article.description,
        openGraph: {
            title: article.metaTitle || article.name,
            description: article.metaDescription || article.description,
        },
    };
}

export default async function Product({ params }: PageProps) {

    const { id, topic } = await params;
    // const { width } = useViewportSize();

    if (id && typeof id === 'string' && topic && typeof topic === 'string') {
        const article = blog[topic].articles[Number(id)];

        return (
            <>
                {/* Balise article avec les données Schema.org */}
                <article itemScope itemType="https://schema.org/Article">
                    <header>
                        {/* Titre de l'article */}
                        <Title order={1} ta="center" my="lg" itemProp="headline">
                            <Text
                                inherit
                                variant="gradient"
                                component="span"
                                gradient={{ from: 'pink', to: 'yellow' }}
                            >
                                {article.name}
                            </Text>
                        </Title>

                        {/* Carte contenant l'image et la description */}
                        <Card shadow="md" w="fit-content" mx="auto">
                            <Flex
                                gap="md"
                                justify="center"
                                w="fit-content"
                                direction={{ sm: 'row', base: 'column' }}
                            >
                                <Image
                                    component={NextImage}
                                    src={article.picture}
                                    alt={article.name || 'Image de l’article'}
                                    maw={300}
                                    h={200}
                                    loading="lazy"
                                    itemProp="image"
                                />
                                <Text component="p" p="md" w={{ sm: 500, base: '100%' }} itemProp="description">
                                    {article.description}
                                </Text>
                            </Flex>
                        </Card>
                    </header>

                    {/* Contenu de l'article */}
                    <div itemProp="articleBody">{article.content}</div>
                </article>
            </>
        );
    } else {
        return <>Error</>;
    }
}
