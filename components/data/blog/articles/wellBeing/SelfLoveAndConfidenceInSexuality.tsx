import { Title, Text, Container, List, ThemeIcon, Divider, ListItem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/bien_etre/article_3.webp";

export const SelfLoveAndConfidenceInSexuality: Article = {
    id: 1,
    name: "L'amour de soi et la confiance sexuelle",
    picture: MonImage,
    description: `L'amour de soi est une base essentielle pour une vie sexuelle épanouie. Cet article vous aide à cultiver la confiance en vous et à accepter votre sexualité.`,
    metaTitle: "L'amour de soi et la confiance sexuelle",
    metaDescription: "Cultivez l'amour de soi pour renforcer votre confiance sexuelle. Apprenez à accepter et à célébrer votre corps pour une vie sexuelle plus épanouie.",
    content: (
        <Container component="article" size="md" p="md">
            <Title order={2} mb="sm">Pourquoi l'amour de soi est crucial pour la sexualité</Title>
            <Text component="p" mb="sm">
                Avoir une bonne image de soi est essentiel pour vivre des expériences sexuelles épanouies. L'amour de soi renforce la confiance, diminue l'anxiété et favorise une meilleure communication avec son partenaire.
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
                    <Text component="span" fw="bold">Améliore l'acceptation de son corps :</Text> Accepter son corps tel qu'il est permet de se sentir plus libre et plus à l'aise dans ses relations intimes.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Renforce la communication :</Text> Une image de soi positive favorise l'ouverture et l'expression des besoins sexuels.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Réduit les inhibitions :</Text> L'amour de soi permet de libérer les inhibitions et de mieux apprécier la sexualité.
                </ListItem>
            </List>

            <Divider my="lg" />

            <Title order={2} mb="sm">Comment renforcer l'amour de soi pour améliorer la sexualité</Title>
            <Text component="p" mb="sm">
                Voici des actions simples pour renforcer l'amour de soi et améliorer votre sexualité :
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
                    <Text component="span" fw="bold">Pratiquez des affirmations positives :</Text> Dites-vous des mots positifs sur votre corps et votre sexualité pour renforcer la confiance.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Méditation sur l'acceptation de soi :</Text> Méditez pour vous reconnecter à votre corps et apprendre à l'accepter pleinement.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Exprimez vos besoins sexuels :</Text> Soyez ouvert avec votre partenaire sur vos attentes et vos désirs pour améliorer la satisfaction sexuelle.
                </ListItem>
            </List>

            <Divider my="lg" />
            <footer>
                <Title order={2} mb="sm">Conclusion</Title>
                <Text component="p">
                    L'amour de soi est un pilier essentiel pour une vie sexuelle épanouie. En cultivant l'acceptation de votre corps et en renforçant votre confiance en vous, vous pouvez vivre une sexualité plus satisfaisante et mieux communiquer avec votre partenaire.
                </Text>
            </footer>
        </Container>
    )
};
