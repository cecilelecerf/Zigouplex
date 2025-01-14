import { Title, Text, Container, List, ThemeIcon, Divider, ListItem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/endurance/article_3.webp";

export const EnduranceAndResilience: Article = {
    id: 2,
    name: "Endurance et Résilience : Comment Zigouplex Améliore vos Performances",
    picture: MonImage,
    description: `Zigouplex est la solution idéale pour améliorer votre endurance et renforcer votre résilience. Découvrez comment ce produit naturel vous aide à repousser vos limites et à maintenir votre énergie.`,
    metaTitle: "Endurance et Résilience : Comment Zigouplex Améliore vos Performances",
    metaDescription: "Boostez votre endurance et votre résilience avec Zigouplex. Découvrez comment ce produit naturel peut améliorer vos performances physiques et mentales.",
    content: (
        <Container component="article" size="md" p="md">
            <Title order={2} mb="sm">L'Endurance et la Résilience avec Zigouplex</Title>
            <Text component="p" mb="sm">
                Envie d’augmenter votre endurance ? Zigouplex est formulé pour vous offrir un soutien optimal, en renforçant votre résistance physique et en vous permettant de rester performant même lors des moments les plus intenses.
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
                    <Text component="span" fw="bold">Soutenir l'endurance physique :</Text> Les ingrédients actifs de Zigouplex favorisent la circulation sanguine, ce qui améliore la performance sportive.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Accélérer la récupération :</Text> La formulation de Zigouplex aide à réduire les fatigues et accélère la récupération après l'effort.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Stimuler la résilience mentale :</Text> En boostant votre énergie, Zigouplex vous permet de maintenir une attitude positive même face aux défis.
                </ListItem>
            </List>

            <Divider my="lg" />

            <footer>
                <Title order={2} mb="sm">Conclusion</Title>
                <Text component="p">
                    Intégrer Zigouplex dans votre quotidien est un excellent moyen d’améliorer votre endurance et votre résilience. Que ce soit pour des activités sportives ou des défis quotidiens, Zigouplex est là pour vous soutenir.
                </Text>
            </footer>
        </Container>
    )
};
