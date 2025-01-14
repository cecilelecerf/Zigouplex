import { Title, Text, Container, List, ThemeIcon, Divider, ListItem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/maleVitalityConfidence/article_1.webp";

export const ExerciseAndSexualHealth: Article = {
    id: 3,
    name: "Les Bienfaits de l’Exercice pour la Santé Sexuelle",
    picture: MonImage,
    description: `L'exercice physique améliore la circulation sanguine et la libido. Découvrez comment l'activité physique peut booster vos performances sexuelles.`,
    metaTitle: "Les Bienfaits de l’Exercice pour la Santé Sexuelle",
    metaDescription: "L'exercice est essentiel pour une vie sexuelle épanouie. Découvrez comment l'activité physique améliore la circulation sanguine et la libido.",
    content: (
        <Container component="article" size="md" p="md">
            <Title order={2} mb="sm">Exercice et Sexualité : Les Bienfaits Inattendus</Title>
            <Text component="p" mb="sm">
                Une activité physique régulière a des effets bénéfiques non seulement sur la santé générale, mais aussi sur la performance sexuelle. L'exercice améliore la circulation sanguine, la production d'hormones et la libido.
            </Text>
            <List
                spacing="sm"
                icon={
                    <ThemeIcon color="orange" size={24} radius="xl">
                        <IconCheck size={16} />
                    </ThemeIcon>
                }
            >
                <ListItem>
                    <Text component="span" fw="bold">Amélioration de la circulation sanguine :</Text> L'exercice physique stimule la circulation sanguine, favorisant ainsi une meilleure érection et une meilleure performance.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Réduction du stress :</Text> L'exercice est un excellent moyen de réduire le stress et l'anxiété, ce qui contribue à améliorer la libido et la performance sexuelle.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Renforcement de la confiance en soi :</Text> L'exercice améliore l'image corporelle et augmente la confiance en soi, éléments clés pour une vie sexuelle épanouie.
                </ListItem>
            </List>

            <Divider my="lg" />

            <footer>
                <Title order={2} mb="sm">Conclusion</Title>
                <Text component="p">
                    Pour booster vos performances sexuelles, combinez une activité physique régulière avec des produits naturels comme Zigouplex pour des résultats optimaux.
                </Text>
            </footer>
        </Container>
    )
};
