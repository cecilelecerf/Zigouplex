import { Title, Text, Container, List, ThemeIcon, Divider, ListItem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/maleVitalityConfidence/article_7.webp";

export const NutritionAndSexualHealth: Article = {
    id: 6,
    name: "La Nutrition pour une Santé Sexuelle Optimale : Les Aliments qui Boostent la Vitalité Masculine",
    picture: MonImage,
    description: `Découvrez les aliments qui peuvent améliorer votre santé sexuelle, renforcer votre vitalité masculine et optimiser vos performances.`,
    metaTitle: "La Nutrition pour une Santé Sexuelle Optimale : Les Aliments qui Boostent la Vitalité Masculine",
    metaDescription: "Boostez votre vitalité masculine avec une alimentation adaptée et des compléments naturels comme Zigouplex. Découvrez les meilleurs aliments pour une santé sexuelle optimale.",
    content: (
        <Container component="article" size="md" p="md">
            <Title order={2} mb="sm">Alimentation et Santé Sexuelle : Un Duo Gagnant</Title>
            <Text component="p" mb="sm">
                Une bonne alimentation joue un rôle clé dans la santé sexuelle. Des aliments spécifiques peuvent stimuler la circulation sanguine, augmenter la libido et soutenir la production d'hormones essentielles à la vitalité masculine.
            </Text>
            <List
                spacing="sm"
                icon={
                    <ThemeIcon color="red" size={24} radius="xl">
                        <IconCheck size={16} />
                    </ThemeIcon>
                }
            >
                <ListItem>
                    <Text component="span" fw="bold">Les aliments riches en zinc :</Text> Le zinc est essentiel pour maintenir un taux de testostérone optimal. Intégrez des noix, des graines de courge et des légumineuses dans votre alimentation.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Les fruits et légumes riches en antioxydants :</Text> Les fruits comme les baies et les légumes à feuilles vertes aident à réduire l'inflammation et soutiennent la circulation sanguine.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Les acides gras oméga-3 :</Text> Présents dans les poissons gras, ils améliorent la circulation sanguine et la fonction cardiaque, favorisant ainsi des performances sexuelles optimales.
                </ListItem>
            </List>

            <Divider my="lg" />

            <footer>
                <Title order={2} mb="sm">Compléments Naturels pour Booster la Vitalité</Title>
                <Text component="p">
                    Zigouplex, combiné avec une alimentation équilibrée, peut contribuer à optimiser vos performances sexuelles en stimulant la circulation sanguine et en améliorant l'équilibre hormonal.
                </Text>
            </footer>
        </Container>
    )
};
