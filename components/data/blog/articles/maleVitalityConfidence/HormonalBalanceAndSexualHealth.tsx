import { Title, Text, Container, List, ThemeIcon, Divider, ListItem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/maleVitalityConfidence/article_1.webp";

export const HormonalBalanceAndSexualHealth: Article = {
    id: 4,
    name: "Équilibre Hormonal et Sexualité : Les Clés d’une Vie Sexuelle Saine",
    picture: MonImage,
    description: `L'équilibre hormonal est crucial pour maintenir une vie sexuelle épanouie. Découvrez comment l'alimentation et les produits naturels comme Zigouplex contribuent à cet équilibre.`,
    metaTitle: "Équilibre Hormonal et Sexualité : Les Clés d’une Vie Sexuelle Saine",
    metaDescription: "Maintenez un équilibre hormonal optimal avec Zigouplex et d'autres solutions naturelles pour soutenir votre vie sexuelle et vos performances.",
    content: (
        <Container component="article" size="md" p="md">
            <Title order={2} mb="sm">L’Impact de l'Équilibre Hormonal sur la Sexualité</Title>
            <Text component="p" mb="sm">
                Un équilibre hormonal stable est essentiel pour une vie sexuelle saine. Des fluctuations hormonales peuvent affecter la libido, la performance et la satisfaction. Heureusement, certains produits naturels peuvent aider à maintenir cet équilibre.
            </Text>
            <List
                spacing="sm"
                icon={
                    <ThemeIcon color="teal" size={24} radius="xl">
                        <IconCheck size={16} />
                    </ThemeIcon>
                }
            >
                <ListItem>
                    <Text component="span" fw="bold">Les effets du stress sur les hormones :</Text> Le stress chronique perturbe l’équilibre hormonal, en particulier la production de testostérone. Zigouplex aide à réduire le stress et à rétablir l'équilibre.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Les plantes adaptogènes :</Text> Le ginseng et le maca, présents dans Zigouplex, sont des plantes adaptogènes qui aident à maintenir une fonction hormonale saine.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">L'importance d'un sommeil réparateur :</Text> Un bon sommeil est crucial pour la production hormonale. Zigouplex contribue également à améliorer la qualité du sommeil.
                </ListItem>
            </List>

            <Divider my="lg" />

            <footer>
                <Title order={2} mb="sm">Conclusion</Title>
                <Text component="p">
                    L’équilibre hormonal est la clé d’une vie sexuelle saine et épanouie. Utilisez des solutions naturelles comme Zigouplex pour maintenir cet équilibre et optimiser vos performances.
                </Text>
            </footer>
        </Container>
    )
};
