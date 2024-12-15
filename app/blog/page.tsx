import { blog } from "../../components/data/blog/topics";
import { Accordion, AccordionControl, AccordionItem, AccordionPanel, Box, Card, CardSection, Image, SimpleGrid, Text, Title } from "@mantine/core";
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
                                <SimpleGrid cols={3}>
                                    {value.articles.map((article, index) =>
                                        <Link href={`/blog/${key}/${article.id}`} style={{ textDecoration: "none" }}>
                                            <Card shadow="sm" key={index} h="100%">
                                                <CardSection mb="md">
                                                    <Image src={article.picture} alt="lala" component={NextImage} mah={100} />
                                                </CardSection>
                                                <Text>
                                                    {article.name}
                                                </Text>
                                            </Card>
                                        </Link>
                                    )}
                                </SimpleGrid>
                            </AccordionPanel>
                        </AccordionItem>
                    )}
                </Accordion>
            </Box>
        </>
    )

}

