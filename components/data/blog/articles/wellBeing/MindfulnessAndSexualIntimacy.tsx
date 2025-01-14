import { Title, Text, Container, List, ThemeIcon, Divider, ListItem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/bien_etre/article_1.webp";

export const MindfulnessAndSexualIntimacy: Article = {
    id: 0,
    name: "La pleine conscience et l'intimité sexuelle",
    picture: MonImage,
    description: `La pleine conscience (mindfulness) peut transformer votre vie intime en favorisant une connexion plus profonde et une expérience plus enrichissante.`,
    metaTitle: "La pleine conscience et l'intimité sexuelle",
    metaDescription: "Découvrez comment la pleine conscience peut améliorer l'intimité sexuelle, favoriser la connexion émotionnelle et transformer la qualité de vos relations.",
    content: (
        <Container component="article" size="md" p="md">
            <Title order={2} mb="sm">Pourquoi la pleine conscience est-elle importante pour l'intimité ?</Title>
            <Text component="p" mb="sm">
                La pleine conscience consiste à être pleinement présent dans l'instant et à accepter sans jugement. Appliquée à la sexualité, elle permet de renforcer la connexion émotionnelle et physique entre les partenaires. Voici pourquoi elle est essentielle :
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
                    <Text component="span" fw="bold">Amélioration de la connexion émotionnelle :</Text> La pleine conscience permet d'être attentif aux besoins et aux émotions de son partenaire, renforçant ainsi la complicité.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Réduction de l'anxiété de performance :</Text> En se concentrant sur l'instant présent, on réduit les distractions mentales et les pressions liées à la performance sexuelle.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Favorise le plaisir :</Text> En éliminant les pensées distrayantes, la pleine conscience augmente la capacité à apprécier pleinement chaque moment d'intimité.
                </ListItem>
            </List>

            <Divider my="lg" />

            <Title order={2} mb="sm">Comment pratiquer la pleine conscience dans la sexualité</Title>
            <Text component="p" mb="sm">
                Voici quelques techniques de pleine conscience à intégrer dans votre vie sexuelle :
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
                    <Text component="span" fw="bold">Respiration profonde :</Text> Pratiquez des respirations lentes et profondes pendant l'intimité pour rester connecté à vos sensations et à votre partenaire.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Écoute active :</Text> Concentrez-vous sur les paroles et les gestes de votre partenaire, en étant pleinement présent et en réagissant à ses besoins.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Visualisation :</Text> Utilisez des visualisations pour renforcer la connexion et imaginer des expériences sensorielles enrichissantes avec votre partenaire.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Méditation guidée avant l'intimité :</Text> Pratiquez une méditation légère avant de passer à l'intimité pour vous recentrer et libérer l'esprit des distractions.
                </ListItem>
            </List>

            <Divider my="lg" />
            <footer>
                <Title order={2} mb="sm">Conclusion</Title>
                <Text component="p">
                    La pleine conscience transforme la manière dont vous vivez l'intimité sexuelle en vous permettant de vous concentrer sur l'instant présent. En intégrant ces pratiques dans votre vie intime, vous pouvez augmenter la satisfaction sexuelle, améliorer la communication avec votre partenaire et réduire les tensions.
                </Text>
            </footer>
        </Container>
    )
};
