import { Title, Text, Container, List, ThemeIcon, Divider, ListItem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/confiance/article_5.webp";

export const ConfidenceAndSexualHealth: Article = {
    id: 1,
    name: "La Confiance en Soi : La Clé d’une Vie Sexuelle Épanouie",
    picture: MonImage,
    description: `La confiance en soi joue un rôle crucial dans la performance sexuelle. Découvrez comment les produits naturels peuvent renforcer cette confiance et améliorer votre vie sexuelle.`,
    metaTitle: "La Confiance en Soi : La Clé d’une Vie Sexuelle Épanouie",
    metaDescription: "Renforcez votre confiance en vous avec des solutions naturelles comme Zigouplex. Découvrez comment cela peut améliorer votre vie sexuelle.",
    content: (
        <Container component="article" size="md" p="md">
            <Title order={2} mb="sm">Confiance en Soi et Sexualité : Un Duo Indissociable</Title>
            <Text component="p" mb="sm">
                La confiance en soi est essentielle pour une vie sexuelle épanouie. Les solutions naturelles, comme Zigouplex, peuvent aider à renforcer cette confiance et à améliorer vos performances sexuelles.
            </Text>
            <List
                spacing="sm"
                icon={
                    <ThemeIcon color="yellow" size={24} radius="xl">
                        <IconCheck size={16} />
                    </ThemeIcon>
                }
            >
                <ListItem>
                    <Text component="span" fw="bold">Amélioration de l'énergie et de la vitalité :</Text> Zigouplex vous aide à vous sentir plus énergique et prêt à relever les défis sexuels avec confiance.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Réduction du stress :</Text> En réduisant le stress et l'anxiété, Zigouplex favorise un état mental plus calme et une meilleure confiance en soi.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Renforcement de la santé physique :</Text> La vitalité physique est liée à la confiance en soi et à la performance sexuelle. Zigouplex soutient cette vitalité.
                </ListItem>
            </List>

            <Divider my="lg" />

            <footer>
                <Title order={2} mb="sm">Conclusion</Title>
                <Text component="p">
                    Pour une vie sexuelle épanouie, investissez dans votre confiance en vous avec des solutions naturelles comme Zigouplex. Améliorez votre énergie, réduisez le stress et boostez vos performances.
                </Text>
            </footer>
        </Container>
    )
};
