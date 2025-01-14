import { Anchor, Container, Divider, List, ListItem, Text, ThemeIcon, Title } from '@mantine/core';
import MonImage from "../../../../assets/blog/sante_mentale/article_4.webp"
import { Article } from '../../topics';
import { IconCheck } from '@tabler/icons-react';

export const DepressionAndLibido: Article = {
    id: 3,
    name: 'Dépression et Libido : Le Combat des Sens, ou Comment Retrouver l’Équilibre',
    description: `Ah, la dépression... ce n’est pas juste un petit coup de blues, mais une tempête intérieure qui engloutit tout, y compris notre libido. Pourtant, ce sujet est bien souvent évité, presque tabou. Pourtant, comprendre comment la dépression perturbe non seulement notre esprit, mais aussi notre désir sexuel, est crucial. Si vous êtes en quête de réponses et de solutions subtiles, cet article est pour vous.`,
    picture: MonImage,
    metaTitle: "Dépression et Libido : Le Combat des Sens, ou Comment Retrouver l’Équilibre",
    metaDescription: "La dépression a un impact significatif sur la libido, perturbant les désirs et la sensualité. Cet article explore les effets de la dépression sur la libido et propose des solutions pour retrouver l'équilibre, avec des conseils sur les traitements, la communication dans le couple, et des suggestions naturelles pour raviver le désir.",

    content: (
        <Container component="article" size="md" p="md">
            <Divider my="xl" />
            {/* Article content */}
            <section>
                <Title order={2} my="lg">
                    La dépression : un nuage sombre au-dessus de notre sensualité
                </Title>
                <Text>
                    Alors voilà, la dépression, c’est un peu comme cette pluie fine qui tombe sans prévenir un dimanche après-midi à Paris. Elle te touche de l’intérieur, elle brouille ta vision du monde et, surtout, elle engloutit tes désirs. Tu n’as plus envie de sortir, plus de passion, plus de feu sacré dans la chambre. C’est juste le vide. Le sexe, c’est un concept abstrait, comme ces soirées trop parfaites qu’on voit sur Instagram.
                </Text>
                <Text>
                    Pourquoi ? Parce que la dépression joue avec ton corps, comme une partition mal jouée. Elle te prive de tes neurotransmetteurs, ces petites substances qui font que tu te sens bien. La dopamine et la sérotonine, ces joyaux de la bonne humeur, s’évaporent, laissant place au cortisol, cette hormone du stress qui, en toute logique, tue ton désir. Et toi, tu te retrouves là, figé dans ton canapé, sans envie de rien, même pas de café, même pas d’un bon vin naturel.
                </Text>
            </section>

            <Divider my="xl" />

            {/* Treatments section */}
            <section>
                <Title order={2} my="lg">
                    Les traitements : un mal nécessaire pour retrouver sa libido ?
                </Title>
                <Text>
                    Ah, les antidépresseurs. Ces petites pilules que tout le monde te conseille mais que personne n'ose vraiment prendre. Et bien, si tu les prends, sache que certains ont un effet secondaire plus redoutable que la météo de Paris en novembre : ils diminuent ton désir sexuel. Les ISRS, ces médicaments anti-déprime, te coupent l’envie comme un mauvais vin. Mais ne panique pas, il existe des solutions pour éviter cette catastrophe.
                </Text>
                <Text>
                    Non, il n’est pas question d’arrêter ton traitement. Mais sache qu’il est essentiel d’en parler avec ton médecin, de discuter des effets secondaires, et pourquoi pas de changer de médicament ou d’envisager des thérapies complémentaires.
                </Text>
                <List
                    spacing="sm"
                    icon={
                        <ThemeIcon color="teal" size="md">
                            <IconCheck />
                        </ThemeIcon>
                    }
                    mt="md"
                >
                    <ListItem>Changer de traitement pour quelque chose de plus doux, mais tout aussi efficace.</ListItem>
                    <ListItem>Faire des ajustements pour que la libido ne soit pas sacrifiée sur l’autel de la dépression.</ListItem>
                    <ListItem>Associer méditation, yoga, ou même acupuncture, pour retrouver l’équilibre.</ListItem>
                </List>
            </section>

            <Divider my="xl" />

            {/* Couple section */}
            <section>
                <Title order={2} my="lg">
                    Et dans le couple ? Parler de ses failles, c’est un art
                </Title>
                <Text>
                    Ah, la vie de couple... C’est censé être un jardin fleuri, et pourtant, la dépression transforme tout en champ de bataille. Tu t’éloignes, tu te renfermes, et ton partenaire ne comprend pas pourquoi tu n’as plus envie de rien. Alors, si tu veux que ça change, il faut casser ce tabou, briser le silence.
                </Text>
                <Text>
                    Clé numéro 1 : communiquer. Oui, je sais, c’est un peu bateau, mais c’est la vérité. Partage tes émotions, tes doutes, et surtout, dis-lui que la baisse de libido n’a rien à voir avec l’amour que tu lui portes, mais tout à voir avec la dépression qui te pèse. Tu vois ? Ce n’est pas si compliqué.
                </Text>
                <Text>
                    Clé numéro 2 : redécouvrir l’intimité autrement. La sensualité ne se résume pas à des performances sous la couette. Câlins, massages, discussions profondes autour d’un thé matcha – tout ça compte. Ce n’est pas la pression qui te rendra heureux, mais la complicité.
                </Text>
            </section>

            <Divider my="xl" />

            {/* Tips for restoring desire */}
            <section>
                <Title order={2} my="lg">
                    Quelques idées pour retrouver l’envie, sans pression
                </Title>
                <Text>
                    Parce qu’au fond, tout réside dans le lâcher-prise. Oublie cette pression de performance, oublie les attentes irréalistes. L’essentiel, c’est de revenir à l’essence même du désir : le plaisir simple de partager un moment avec quelqu’un.
                </Text>
                <Text>
                    Donc, pas de panique. Si tu veux retrouver ton désir, commence par prendre soin de toi. Et si tu veux un petit coup de pouce, pourquoi ne pas essayer des solutions naturelles, comme <Anchor href="#zigouplex">Zigouplex</Anchor> ? C’est un petit geste tout simple, mais qui peut vraiment faire la différence.
                </Text>
            </section>

            <Divider my="xl" />

            <footer>
                <Text ta="center" w="bold">
                    En conclusion, il n’y a pas de perfection. Mais accepter nos imperfections, c’est déjà une victoire.
                </Text>
                <Text ta="center" size="sm" c="dimmed">
                    La vie, c’est un peu comme la dépression : parfois, il faut l’apprivoiser pour retrouver sa lumière. Avec un petit allié comme <Anchor href="#zigouplex">Zigouplex</Anchor>, chaque pas vers la sérénité est une victoire.
                </Text>
            </footer>
        </Container>
    ),
};
