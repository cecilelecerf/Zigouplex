import { Title, Text, Container, List, ThemeIcon, Divider } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/sante_mentale/article_1.webp";

export const OvercomingSexualTrauma: Article = {
    id: 6,
    name: "Surmonter les traumatismes sexuels : Un chemin vers la guérison",
    picture: MonImage,
    description: `Les traumatismes sexuels peuvent laisser des blessures profondes qui affectent à la fois le corps et l'esprit. Cet article explore les défis auxquels font face les survivants et propose des stratégies pour les aider dans leur parcours de guérison.`,

    content: (
        <Container component="article" size="md" p="md">
            {/* Section : Comprendre les traumatismes sexuels */}
            <Title order={2} mb="sm">
                Comprendre les traumatismes sexuels
            </Title>
            <Text component="p" mb="sm">
                Les traumatismes sexuels sont des expériences profondément perturbantes qui peuvent affecter divers aspects de la vie d'une personne :
            </Text>
            <List
                spacing="sm"
                icon={
                    <ThemeIcon color="blue" size={24} radius="xl">
                        <IconCheck size={16} />
                    </ThemeIcon>
                }
            >
                <List.Item>
                    <Text component="span" fw="bold">
                        Conséquences émotionnelles :
                    </Text>{' '}
                    Sentiments de honte, de culpabilité ou de peur persistants qui peuvent altérer l'estime de soi.
                </List.Item>
                <List.Item>
                    <Text component="span" fw="bold">
                        Effets sur les relations :
                    </Text>{' '}
                    Les traumatismes peuvent rendre difficile la confiance envers les autres, notamment dans des relations intimes.
                </List.Item>
                <List.Item>
                    <Text component="span" fw="bold">
                        Troubles psychologiques :
                    </Text>{' '}
                    L'anxiété, la dépression ou le stress post-traumatique (PTSD) sont des réponses fréquentes aux traumatismes sexuels.
                </List.Item>
            </List>

            <Divider my="lg" />

            {/* Section : Stratégies pour surmonter les traumatismes sexuels */}
            <Title order={2} mb="sm">
                Stratégies pour surmonter les traumatismes sexuels
            </Title>
            <Text component="p" mb="sm">
                Bien qu'il n'existe pas de solution unique, plusieurs approches peuvent aider les survivants à se reconstruire et à retrouver leur bien-être :
            </Text>
            <List
                spacing="sm"
                icon={
                    <ThemeIcon color="green" size={24} radius="xl">
                        <IconCheck size={16} />
                    </ThemeIcon>
                }
            >
                <List.Item>
                    <Text component="span" fw="bold">
                        Thérapie spécialisée :
                    </Text>{' '}
                    Consulter un thérapeute formé en traitement des traumatismes peut offrir un espace sûr pour exprimer et traiter les émotions.
                </List.Item>
                <List.Item>
                    <Text component="span" fw="bold">
                        Groupes de soutien :
                    </Text>{' '}
                    Rejoindre des groupes avec d'autres survivants permet de partager des expériences et de se sentir moins isolé.
                </List.Item>
                <List.Item>
                    <Text component="span" fw="bold">
                        Techniques de gestion du stress :
                    </Text>{' '}
                    Des activités comme le yoga, la méditation ou l'art-thérapie peuvent aider à apaiser l'esprit et le corps.
                </List.Item>
                <List.Item>
                    <Text component="span" fw="bold">
                        Éducation et information :
                    </Text>{' '}
                    Apprendre sur les traumatismes peut aider à comprendre les réactions émotionnelles et physiques, et à mieux y faire face.
                </List.Item>
            </List>

            <Divider my="lg" />

            {/* Conclusion */}
            <Title order={2} mb="sm">
                Conclusion
            </Title>
            <Text component="p">
                Surmonter les traumatismes sexuels est un processus qui demande du temps, de la patience et du soutien. En combinant des stratégies adaptées et en recherchant une aide professionnelle, il est possible de reconstruire une vie épanouissante et d'aller au-delà des blessures du passé.
                Rappelez-vous que vous n'êtes pas seul(e) dans ce parcours, et que des ressources sont disponibles pour vous accompagner.
            </Text>
        </Container>
    )
};
