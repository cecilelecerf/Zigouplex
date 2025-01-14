import { Title, Text, Container, List, ThemeIcon, Divider, ListItem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/bien_etre/article_1.webp";

export const MeditationForEveryone: Article = {
    id: 3,
    name: "La méditation, c’est pas que pour les yogis !",
    picture: MonImage,
    description: `La méditation, c’est l'outil que tout Parisien un peu "bobo" se doit d'adopter. C’est un véritable must-have pour garder son zen, surtout dans une ville aussi effervescente. On vous dit pourquoi. `,
    metaTitle: "La méditation, c’est pas que pour les yogis !",
    metaDescription: "La méditation, accessible à tous, est bien plus qu'une simple tendance. Découvrez comment l’intégrer à votre quotidien pour un bien-être total.",
    content: (
        <Container component="article" size="md" p="md">
            <Title order={2} mb="sm">La méditation, ton nouveau café du matin</Title>
            <Text component="p" mb="sm">
                On ne va pas se mentir, Paris peut être un véritable marathon. Entre le métro-boulot-dodo et les afterworks un peu trop longs, on oublie souvent de respirer. Mais la méditation, c’est exactement ce qu’il nous faut pour remettre de l’équilibre dans tout ça. Pas besoin d’être un moine tibétain pour en profiter, crois-moi !
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
                    <Text component="span" fw="bold">Réduire le stress :</Text> Un petit moment de méditation le matin ou même entre deux rendez-vous et voilà, le stress fond comme neige au soleil. Tu vois, ce n’est pas sorcier !
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Améliorer la concentration :</Text> Tu veux vraiment être plus productif sans courir partout ? Essaye la méditation. Dix minutes pour te recentrer et hop, c’est reparti !
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Se reconnecter à soi-même :</Text> T’as l’impression de te perdre un peu dans le tourbillon de la vie ? La méditation, c’est le moyen de te retrouver et de te remettre à l’écoute de toi-même.
                </ListItem>
            </List>

            <Divider my="lg" />

            <Title order={2} mb="sm">Comment commencer sans devenir une bobo de l’Inde</Title>
            <Text component="p" mb="sm">
                OK, on n’a pas dit qu’il fallait partir en Inde et vivre dans une grotte (même si ça a son charme). Pour débuter, tu n’as besoin que de quelques minutes, d’un endroit calme et d’une bonne volonté. Tu peux même le faire après ta session de yoga, mais c’est pas obligatoire !
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
                    <Text component="span" fw="bold">Respiration profonde :</Text> Inspire, expire, concentre-toi sur ton souffle. T'as compris le principe ?
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Utilise des applis :</Text> Oui, il existe des applis de méditation comme Headspace ou Calm. C’est comme si ton iPhone devenait ton coach personnel.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Pas de pression :</Text> L'idée, ce n'est pas de devenir un expert en méditation, juste de prendre quelques minutes pour toi, sans culpabilité.
                </ListItem>
            </List>

            <Divider my="lg" />
            <footer>
                <Title order={2} mb="sm">Conclusion</Title>
                <Text component="p">
                    Alors, prêt à prendre une petite pause zen dans ta journée ? La méditation, c’est comme un café mais pour ton esprit. Pratique la régulièrement et tu verras, ça change tout !
                </Text>
            </footer>
        </Container>
    )
};
