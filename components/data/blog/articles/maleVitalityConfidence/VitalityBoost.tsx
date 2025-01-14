import { Title, Text, Container, List, ThemeIcon, Divider, ListItem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/maleVitalityConfidence/article_9.webp";

export const VitalityBoost: Article = {
    id: 8,
    name: "Renforcer sa Vitalité au Quotidien avec Zigouplex",
    picture: MonImage,
    description: `Découvrez comment intégrer Zigouplex dans votre routine quotidienne pour une vitalité retrouvée, boostez votre énergie et retrouvez un bien-être global.`,
    metaTitle: "Renforcer sa Vitalité au Quotidien avec Zigouplex",
    metaDescription: "Zigouplex, une solution naturelle pour booster votre vitalité, améliorer votre énergie et rester en forme. Découvrez tous les bienfaits.",
    content: (
        <Container component="article" size="md" p="md">
            <Title order={2} mb="sm">Zigouplex : Un allié naturel pour votre énergie</Title>
            <Text component="p" mb="sm">
                Que vous soyez actif ou que vous ressentiez des baisses de régime, il est essentiel de prendre soin de votre vitalité. Zigouplex offre une solution naturelle pour renforcer votre énergie au quotidien.
            </Text>
            <List
                spacing="sm"
                icon={
                    <ThemeIcon color="blue" size={24} radius="xl">
                        <IconCheck size={16} />
                    </ThemeIcon>
                }
            >
                <ListItem>
                    <Text component="span" fw="bold">Augmenter l'endurance :</Text> Grâce aux ingrédients naturels comme le ginseng et le maca, Zigouplex aide à améliorer votre endurance.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Booster la circulation sanguine :</Text> La L-arginine, un des composants clés de Zigouplex, favorise la circulation sanguine et la vitalité.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Renforcer votre confiance :</Text> L'effet global de Zigouplex contribue à améliorer votre bien-être physique et mental.
                </ListItem>
            </List>

            <Divider my="lg" />

            <footer>
                <Title order={2} mb="sm">Conclusion</Title>
                <Text component="p">
                    Intégrer Zigouplex dans votre routine quotidienne est un moyen naturel d'améliorer votre vitalité et votre énergie. En quelques semaines, vous ressentirez une véritable différence !
                </Text>
            </footer>
        </Container>
    )
};
