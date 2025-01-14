import { Title, Text, Container, List, ThemeIcon, Divider, ListItem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/sante_mentale/article_1.webp";

export const JealousyAndTrust: Article = {
    id: 3,
    name: "Jalousie et confiance : Trouver l'équilibre dans vos relations",
    picture: MonImage,
    metaTitle: "Jalousie et confiance : Trouver l'équilibre dans vos relations",
    metaDescription: "Explorez les causes de la jalousie dans les relations et découvrez des stratégies pour cultiver la confiance mutuelle. Apprenez à gérer les émotions complexes de la jalousie pour construire des relations plus équilibrées et harmonieuses.",
    description: `La jalousie est une émotion complexe qui peut mettre à mal la confiance dans une relation. Cet article explore les causes de la jalousie et propose des moyens de cultiver une confiance mutuelle.`,

    content: (
        <Container component="article" size="md" p="md">
            {/* Section : Comprendre la jalousie */}
            <Title order={2} mb="sm">
                Comprendre la jalousie
            </Title>
            <Text component="p" mb="sm">
                La jalousie est une réaction émotionnelle courante, souvent déclenchée par la peur de perdre une personne ou un lien précieux. Elle peut cependant devenir toxique si elle n'est pas gérée correctement. Voici quelques causes fréquentes :
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
                        Insécurité personnelle :
                    </Text>{' '}
                    Un manque de confiance en soi peut intensifier les sentiments de jalousie.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Expériences passées :
                    </Text>{' '}
                    Des relations antérieures marquées par l'infidélité ou la trahison peuvent laisser des cicatrices émotionnelles.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Manque de communication :
                    </Text>{' '}
                    Les malentendus ou un manque de clarté peuvent alimenter des suspicions injustifiées.
                </ListItem>
            </List>

            <Divider my="lg" />

            {/* Section : Cultiver la confiance */}
            <Title order={2} mb="sm">
                Cultiver la confiance dans vos relations
            </Title>
            <Text component="p" mb="sm">
                La confiance est essentielle pour maintenir une relation saine. Voici quelques stratégies pour renforcer cette confiance et atténuer la jalousie :
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
                        Communication honnête :
                    </Text>{' '}
                    Partagez vos sentiments et préoccupations avec votre partenaire, de manière calme et respectueuse.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Établir des limites saines :
                    </Text>{' '}
                    Discutez et convenez de limites claires qui respectent les besoins de chacun.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Travailler sur soi-même :
                    </Text>{' '}
                    Renforcez votre estime de soi par des activités positives et l'autocompassion.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Faites preuve de patience :
                    </Text>{' '}
                    La confiance prend du temps à se construire. Soyez patient et ouvert au changement.
                </ListItem>
            </List>

            <Divider my="lg" />

            {/* Conclusion */}
            <Title order={2} mb="sm">
                Conclusion
            </Title>
            <Text component="p">
                La jalousie peut être un défi dans toute relation, mais elle n'est pas insurmontable. En comprenant ses origines et en travaillant à renforcer la confiance, vous pouvez construire une relation plus équilibrée et harmonieuse. Prenez le temps d'écouter, de communiquer et de grandir ensemble.
            </Text>
        </Container>
    )
};
