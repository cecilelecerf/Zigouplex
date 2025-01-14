import { Title, Text, Container, List, ThemeIcon, Divider, ListItem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/bien_etre/article_3.webp";

export const YogaForMentalAndSexualHealth: Article = {
    id: 2,
    name: "Yoga pour la santé mentale et sexuelle",
    picture: MonImage,
    description: `Le yoga est une pratique qui peut avoir un impact profond sur la santé mentale et la sexualité. Cet article explore comment le yoga peut améliorer votre bien-être global.`,
    metaTitle: "Yoga pour la santé mentale et sexuelle",
    metaDescription: "Le yoga peut jouer un rôle clé dans l'amélioration de la santé mentale et sexuelle. Découvrez comment l'intégrer dans votre quotidien pour un bien-être optimal.",
    content: (
        <Container component="article" size="md" p="md">
            <Title order={2} mb="sm">Pourquoi intégrer le yoga dans votre routine</Title>
            <Text component="p" mb="sm">
                Le yoga est une discipline qui offre une multitude de bienfaits pour le corps et l'esprit. Voici pourquoi il est particulièrement bénéfique pour la santé mentale et la sexualité :
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
                    <Text component="span" fw="bold">Réduction du stress :</Text> Le yoga aide à diminuer les niveaux de stress en favorisant la relaxation et en améliorant la gestion des émotions.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Amélioration de la connexion corps-esprit :</Text> Le yoga permet une meilleure écoute de son propre corps, favorisant ainsi une meilleure intimité et communication sexuelle.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Renforcement de la confiance en soi :</Text> Une pratique régulière de yoga peut améliorer la perception de soi, ce qui peut avoir un effet positif sur la libido et la satisfaction sexuelle.
                </ListItem>
            </List>

            <Divider my="lg" />

            <Title order={2} mb="sm">Comment le yoga améliore la santé mentale et sexuelle</Title>
            <Text component="p" mb="sm">
                Voici quelques postures et techniques qui peuvent améliorer votre santé mentale et sexuelle :
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
                    <Text component="span" fw="bold">La posture de l'arbre (Vrksasana) :</Text> Cette posture aide à renforcer la confiance en soi et à améliorer la stabilité émotionnelle.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">La posture du cobra (Bhujangasana) :</Text> Cette posture ouvre la poitrine et peut améliorer la circulation sanguine, contribuant ainsi à une meilleure énergie sexuelle.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Les exercices de respiration (Pranayama) :</Text> Les techniques de respiration, comme la respiration alternée, sont efficaces pour réduire l'anxiété et favoriser la relaxation mentale.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">La méditation :</Text> La méditation permet de libérer l'esprit du stress quotidien et de se recentrer sur ses désirs et besoins intérieurs, ce qui peut améliorer la vie intime.
                </ListItem>
            </List>

            <Divider my="lg" />
            <footer>
                <Title order={2} mb="sm">Conclusion</Title>
                <Text component="p">
                    Intégrer le yoga dans votre vie quotidienne peut améliorer votre santé mentale et sexuelle. En pratiquant des postures spécifiques et des techniques de relaxation, vous pouvez renforcer votre bien-être global, gérer le stress et améliorer la qualité de vos relations intimes.
                </Text>
            </footer>
        </Container>
    )
};
