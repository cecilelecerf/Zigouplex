

import { blog } from "../../components/data/blog/topics";
import { Accordion, AccordionControl, AccordionItem, AccordionPanel, Box, Card, CardSection, Group, Image, SimpleGrid, Text, Title } from "@mantine/core";

import NextImage from 'next/image';
import Link from "next/link";

export default function Blog() {
    return (
        <>
            <Box>

                <Title ta="center" my={100}>
                    <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
                        Le Blog
                    </Text>

                </Title>
                <Accordion>
                    {Object.entries(blog).map(([key, value], i) =>
                        <AccordionItem key={i} value={value.topic}>
                            <AccordionControl>
                                <Text>{value.topic}</Text>
                            </AccordionControl>
                            <AccordionPanel>


                                <Group  >
                                    {value.articles.map((article, index) =>
                                        <Link href={`/blog/${key}/${article.id}`} style={{ textDecoration: "none", height: "100%" }} key={index}>
                                            <Card shadow="sm" h="100%" maw={200}>
                                                <CardSection mb="md">
                                                    <Image src={article.picture} alt="lala" component={NextImage} mah={100} loading="lazy" />

                                                </CardSection>
                                                <Text h={125}>
                                                    {article.name}
                                                </Text>
                                            </Card>

                                        </Link>
                                    )}
                                </Group>
                            </AccordionPanel>
                        </AccordionItem>
                    )}
                </Accordion>
            </Box>
        </>
    )

}

