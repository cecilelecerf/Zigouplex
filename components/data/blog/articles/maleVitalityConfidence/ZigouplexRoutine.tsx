import { Title, Text, Container, List, ThemeIcon, Divider, ListItem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/maleVitalityConfidence/article_1.webp";

export const ZigouplexRoutine: Article = {
    id: 9,
    name: "La Routine Zigouplex : Comment l'intégrer dans votre Vie Active",
    picture: MonImage,
    description: `Découvrez comment intégrer Zigouplex dans votre routine pour booster votre énergie, améliorer votre performance et rester en pleine forme tout au long de la journée.`,
    metaTitle: "La Routine Zigouplex : Comment l'intégrer dans votre Vie Active",
    metaDescription: "Apprenez à intégrer Zigouplex dans votre routine quotidienne pour maintenir une énergie stable et une performance optimale.",
    content: (
        <Container component="article" size="md" p="md">
            <Title order={2} mb="sm">Intégrer Zigouplex dans votre Routine Quotidienne</Title>
            <Text component="p" mb="sm">
                Dans un monde où chaque journée est remplie d'activités, il est crucial de maintenir son énergie. Zigouplex vous aide à garder votre vitalité intacte en optimisant vos performances tout au long de la journée.
            </Text>
            <List
                spacing="sm"
                icon={
                    <ThemeIcon color="purple" size={24} radius="xl">
                        <IconCheck size={16} />
                    </ThemeIcon>
                }
            >
                <ListItem>
                    <Text component="span" fw="bold">Matinée : Commencez la journée en force :</Text> Prenez votre dose de Zigouplex pour démarrer votre journée avec énergie.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Après-midi : Maintenez l'élan :</Text> Un complément de Zigouplex en après-midi pour garder votre énergie constante.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Soirée : Récupérez et préparez-vous pour demain :</Text> Favorisez une récupération rapide avec Zigouplex pour un lendemain optimal.
                </ListItem>
            </List>

            <Divider my="lg" />

            <footer>
                <Title order={2} mb="sm">Conclusion</Title>
                <Text component="p">
                    En intégrant Zigouplex à différents moments de votre journée, vous optimisez votre énergie et votre performance pour affronter tous vos défis.
                </Text>
            </footer>
        </Container>
    )
};
