import { Title, Text, Container, List, ThemeIcon, Divider, ListItem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/bien_etre/article_3.webp";

export const ReconnectWithYourself: Article = {
    id: 5,
    name: "Se reconnecter à soi-même, même dans le métro !",
    picture: MonImage,
    description: `Être centré sur soi-même, c’est essentiel dans ce monde qui va à mille à l'heure. Mais attention, ça ne veut pas dire partir en retraite dans le 16e arrondissement pour faire du silence. Il existe plein de façons de se reconnecter à soi-même, même en plein centre de Paris.`,
    metaTitle: "Se reconnecter à soi-même, même dans le métro !",
    metaDescription: "Apprends à retrouver ta propre énergie, même dans le tumulte quotidien. Des techniques simples pour vivre chaque moment à 100%.",
    content: (
        <Container component="article" size="md" p="md">
            <Title order={2} mb="sm">Reconnexion, mais pas dans une grotte</Title>
            <Text component="p" mb="sm">
                Se reconnecter à soi-même, c’est un peu comme partir en vacances dans un petit café sympa du Marais. C’est une pause pour se retrouver, pour se recentrer. Alors, pourquoi attendre d’être en vacances pour le faire ?
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
                    <Text component="span" fw="bold">Prendre un moment chaque jour :</Text> On pense que se reconnecter à soi, c’est une grosse démarche spirituelle, mais non ! Juste quelques minutes chaque jour, c’est déjà énorme.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">S'écouter vraiment :</Text> Que tu sois dans le métro ou en terrasse, prends un instant pour t’écouter, sentir ce qui se passe à l’intérieur.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Visualisation positive :</Text> Ferme les yeux (si tu n’as pas peur de manquer ta station) et imagine que tu atteins tes objectifs. Simple, mais efficace !
                </ListItem>
            </List>

            <Divider my="lg" />

            <Title order={2} mb="sm">Les petites astuces pour une reconnection quotidienne</Title>
            <Text component="p" mb="sm">
                Tu peux faire ça dans le métro, dans un café ou pendant ta pause-déjeuner. Voici quelques petites astuces pour te reconnecter en douceur :
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
                    <Text component="span" fw="bold">Respirer profondément :</Text> Quand tu attends ton train, inspire profondément, ça prend quelques secondes et tu te sens tout de suite mieux.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Marcher en pleine conscience :</Text> La prochaine fois que tu te balades dans Paris, fais-le lentement, en te concentrant sur chaque pas.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Remercier :</Text> Avant de t'endormir, liste trois choses pour lesquelles tu es reconnaissant. Ce petit geste te connecte à la gratitude.
                </ListItem>
            </List>

            <Divider my="lg" />
            <footer>
                <Title order={2} mb="sm">Conclusion</Title>
                <Text component="p">
                    Pas besoin d’aller loin pour se reconnecter. C’est tout simple : il suffit de quelques minutes chaque jour pour se recentrer. Alors, la prochaine fois que tu prends le métro, pense à toi !
                </Text>
            </footer>
        </Container>
    )
};
