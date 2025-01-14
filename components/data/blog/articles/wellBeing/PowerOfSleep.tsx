import { Title, Text, Container, List, ThemeIcon, Divider, ListItem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/bien_etre/article_2.webp";

export const PowerOfSleep: Article = {
    id: 4,
    name: "Le pouvoir du sommeil : Comment dormir comme un bobo parisien ?",
    picture: MonImage,
    description: `Bien dormir, c'est un art de vivre, surtout quand on habite à Paris. L'importance du sommeil est souvent sous-estimée, mais si tu veux rester frais et dispo pour ta prochaine expo ou soirée à Bastille, il va falloir prendre soin de toi.`,
    metaTitle: "Le pouvoir du sommeil : Comment dormir comme un bobo parisien ?",
    metaDescription: "Apprends à dormir comme un pro et à tirer le meilleur parti de tes nuits pour être au top de ta forme, dans un style bien parisien.",
    content: (
        <Container component="article" size="md" p="md">
            <Title order={2} mb="sm">Le sommeil, c’est pas un luxe, c’est une nécessité</Title>
            <Text component="p" mb="sm">
                Franchement, qui n’a jamais sacrifié quelques heures de sommeil pour finir une série ou discuter jusqu’au petit matin ? Mais quand on a compris que dormir, c’est aussi un acte de soin personnel, on commence à voir les choses différemment. Dormir, c’est un geste de bien-être fondamental.
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
                    <Text component="span" fw="bold">Réparer ton corps :</Text> Le sommeil permet à ton corps de se réparer, c’est un peu comme un spa pour tes cellules, non ?
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Préparer ton esprit pour le lendemain :</Text> Sans une bonne nuit de sommeil, ton cerveau va être aussi fatigué qu’un métro parisien à 18h.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Booste ta créativité :</Text> Et si tu voulais avoir des idées pour ton projet créatif ? Le sommeil réparateur est la clé.
                </ListItem>
            </List>

            <Divider my="lg" />

            <Title order={2} mb="sm">Le secret d'un sommeil de bobo</Title>
            <Text component="p" mb="sm">
                Pas question de se coucher à n’importe quelle heure, il y a des règles. Si tu veux dormir comme un vrai parisien bien-être, voici ce que tu dois absolument adopter :
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
                    <Text component="span" fw="bold">Routine apaisante :</Text> Une petite tisane de camomille, un bain de vapeur, et puis tu éteins tout (pas de téléphone sous l’oreiller !).
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Chambre zen :</Text> Une bonne ambiance dans la chambre avec des lumières tamisées et des coussins en lin. Le tout, avec des huiles essentielles qui sentent bon.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">Pas de café après 16h :</Text> On a tous envie d’un petit café en fin d’après-midi, mais si tu veux dormir, oublie ça.
                </ListItem>
            </List>

            <Divider my="lg" />
            <footer>
                <Title order={2} mb="sm">Conclusion</Title>
                <Text component="p">
                    Le sommeil n’est pas qu’une simple nécessité biologique. C’est une manière de prendre soin de soi. Applique ces conseils pour devenir un pro du sommeil, et laisse tes journées commencer avec énergie et créativité !
                </Text>
            </footer>
        </Container>
    )
};
