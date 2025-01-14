import { blog } from "../../components/data/blog/topics";
import { Accordion, AccordionControl, AccordionItem, AccordionPanel, Box, Card, CardSection, Group, Image, Text, Title } from "@mantine/core";
import NextImage from "next/image";
import Link from "next/link";

export default function Blog() {
    return (
        <>
            <Box>
                {/* Titre principal du blog */}
                <Title ta="center" my={100}>
                    <Text inherit variant="gradient" component="span" gradient={{ from: "pink", to: "yellow" }}>
                        Le Blog
                    </Text>
                </Title>

                {/* Conteneur de la liste des articles */}
                <Accordion>
                    {Object.entries(blog).map(([key, value], i) => (
                        <AccordionItem key={i} value={value.topic}>
                            {/* Section pour chaque topic */}
                            <AccordionControl>
                                <Text>{value.topic}</Text>
                            </AccordionControl>
                            <AccordionPanel>
                                {/* Liste des articles pour le topic */}
                                <Group>
                                    {value.articles.map((article, index) => (
                                        <Link
                                            href={`/blog/${key}/${article.id}`}
                                            style={{ textDecoration: "none", height: "100%" }}
                                            key={index}
                                            itemProp="url"
                                        >
                                            {/* Carte d'article avec les métadonnées */}
                                            <Card shadow="sm" h="100%" maw={200} itemScope itemType="https://schema.org/Article">
                                                <CardSection mb="md">
                                                    {/* Image de l'article */}
                                                    <Image
                                                        src={article.picture}
                                                        alt={article.name || "Image de l’article"}
                                                        component={NextImage}
                                                        mah={100}
                                                        loading="lazy"
                                                        itemProp="image"
                                                    />
                                                </CardSection>
                                                {/* Titre de l'article */}
                                                <Text h={125} itemProp="headline">
                                                    {article.name}
                                                </Text>
                                            </Card>
                                        </Link>
                                    ))}
                                </Group>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
        </>
    );
}
