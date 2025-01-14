import { Title, Text, Container, List, ThemeIcon, Divider, ListItem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/confiance/article_2.webp";

export const ConfidenceAndPerformance: Article = {
    id: 0,
    name: "Confiance et Performance : Zigouplex pour Révéler Votre Potentiel",
    picture: MonImage,
    description: `Zigouplex ne se contente pas d’améliorer votre énergie, il booste également votre confiance en vous pour vous permettre d’atteindre vos objectifs personnels et professionnels.`,
    metaTitle: "Confiance et Performance : Zigouplex pour Révéler Votre Potentiel",
    metaDescription: "Boostez votre confiance et votre performance grâce à Zigouplex. Découvrez comment cette solution naturelle vous aide à performer au quotidien.",
    content: (
        <Container component="article" size="md" p="md">
            <Title order={2} mb="sm">La Confiance en Soi grâce à Zigouplex</Title>
            <Text component="p" mb="sm">
                La confiance en soi est un facteur déterminant dans la réussite de vos projets personnels et professionnels. Zigouplex est conçu pour vous soutenir, en augmentant votre énergie et en vous permettant de vous sentir plus sûr de vous.
            </Text>
            <List
                spacing="sm"
                icon={
                    <ThemeIcon color="green" size={24} radius="xl">
                        <IconCheck size={16} />
                    </ThemeIcon>
                }
            >
                <ListItem>
                    <Text component="span" fw="bold">Réduire l'anxiété :</Text> En réduisant le stress, Zigouplex vous aide à avoir une meilleure gestion de vos émotions.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Améliorer la performance :</Text> Avec ses ingrédients naturels, il soutient la performance physique et mentale, vous permettant d'atteindre vos objectifs.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Soutenir votre bien-être général :</Text> La combinaison de maca et ginseng améliore votre énergie et votre humeur, ce qui a un impact direct sur votre confiance.
                </ListItem>
            </List>

            <Divider my="lg" />

            <footer>
                <Title order={2} mb="sm">Conclusion</Title>
                <Text component="p">
                    Zigouplex est plus qu'un simple complément. C'est un véritable allié pour augmenter votre confiance et booster votre performance. En l'intégrant dans votre routine, vous êtes prêt à relever tous les défis !
                </Text>
            </footer>
        </Container>
    )
};
