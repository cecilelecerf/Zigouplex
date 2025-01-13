import { Title, Text, Container, List, ThemeIcon, Divider, ListItem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/sante_mentale/article_1.webp";

export const CommunicationInRelationships: Article = {
    id: 2,
    name: "L'importance de la communication dans les relations : Clés pour réussir",
    picture: MonImage,
    description: `La communication est le pilier de toute relation saine. Cet article explore pourquoi elle est essentielle et propose des conseils pratiques pour améliorer vos échanges avec vos proches.`,

    content: (
        <Container component="article" size="md" p="md">
            {/* Section : Pourquoi la communication est essentielle */}
            <Title order={2} mb="sm">
                Pourquoi la communication est essentielle
            </Title>
            <Text component="p" mb="sm">
                Une communication claire et honnête est essentielle pour établir des relations solides et épanouies. Voici pourquoi elle est cruciale :
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
                    <Text component="span" fw="bold">
                        Renforce la confiance :
                    </Text>{' '}
                    Les échanges ouverts aident à bâtir un climat de sécurité et de compréhension mutuelle.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Résout les conflits :
                    </Text>{' '}
                    Une bonne communication permet de gérer les désaccords de manière constructive et d'éviter les malentendus.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Renforce les liens émotionnels :
                    </Text>{' '}
                    Partager ses pensées et émotions crée une connexion plus profonde entre les partenaires.
                </ListItem>
            </List>

            <Divider my="lg" />

            {/* Section : Comment améliorer la communication */}
            <Title order={2} mb="sm">
                Comment améliorer la communication
            </Title>
            <Text component="p" mb="sm">
                Améliorer la communication demande des efforts, mais les résultats en valent la peine. Voici quelques stratégies pour y parvenir :
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
                    <Text component="span" fw="bold">
                        Écoute active :
                    </Text>{' '}
                    Soyez attentif aux paroles de l'autre, sans interrompre, et reformulez pour montrer que vous comprenez.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Exprimez vos besoins clairement :
                    </Text>{' '}
                    Utilisez des phrases en "je" pour éviter de blâmer, par exemple, "Je me sens..." au lieu de "Tu fais toujours...".
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Gérez vos émotions :
                    </Text>{' '}
                    Prenez le temps de vous calmer avant de discuter si vous vous sentez en colère ou stressé.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Fixez des moments pour discuter :
                    </Text>{' '}
                    Planifiez régulièrement des moments de dialogue pour parler de vos préoccupations ou projets.
                </ListItem>
            </List>

            <Divider my="lg" />

            {/* Conclusion */}
            <Title order={2} mb="sm">
                Conclusion
            </Title>
            <Text component="p">
                Une communication efficace est la clé pour des relations épanouies et durables. En adoptant des pratiques telles que l'écoute active et l'expression honnête de vos besoins, vous pouvez surmonter les défis relationnels et renforcer vos liens avec vos proches. Prenez le temps de cultiver ces compétences pour un avenir harmonieux.
            </Text>
        </Container>
    )
};
