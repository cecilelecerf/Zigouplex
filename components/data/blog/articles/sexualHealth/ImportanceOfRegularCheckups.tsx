import { Title, Text, Container, List, ThemeIcon, Divider, ListItem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/sante_mentale/article_1.webp";

export const ImportanceOfRegularCheckups: Article = {
    id: 3,
    name: "L'importance des bilans de santé réguliers : Pourquoi les check-ups sont essentiels",
    picture: MonImage,
    description: `Les bilans de santé réguliers sont cruciaux pour maintenir une bonne santé. Cet article explore pourquoi ils sont essentiels et propose des conseils pour bien les planifier.`,
    metaTitle: "L'importance des bilans de santé réguliers : Pourquoi les check-ups sont essentiels",
    metaDescription: "Les bilans de santé réguliers sont cruciaux pour maintenir une bonne santé. Cet article explore pourquoi ils sont essentiels et propose des conseils pour bien les planifier.",
    content: (
        <Container component="article" size="md" p="md">
            {/* Section : Pourquoi les bilans de santé réguliers sont essentiels */}
            <Title order={2} mb="sm">
                Pourquoi les bilans de santé réguliers sont essentiels
            </Title>
            <Text component="p" mb="sm">
                Les bilans de santé réguliers permettent de détecter des problèmes de santé avant qu'ils ne deviennent graves. Voici pourquoi ils sont importants :
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
                        Détection précoce des maladies :
                    </Text>{' '}
                    Les check-ups permettent d'identifier des conditions de santé, comme l'hypertension ou le diabète, avant qu'elles ne causent des complications.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Prévention des maladies graves :
                    </Text>{' '}
                    En suivant des recommandations adaptées à votre âge et votre état de santé, vous pouvez prévenir des maladies graves telles que les cancers ou les maladies cardiaques.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Suivi des antécédents familiaux :
                    </Text>{' '}
                    Un check-up régulier permet de surveiller les risques liés à vos antécédents familiaux et d'adopter des mesures préventives adaptées.
                </ListItem>
            </List>

            <Divider my="lg" />

            {/* Section : Comment organiser un bilan de santé */}
            <Title order={2} mb="sm">
                Comment organiser un bilan de santé
            </Title>
            <Text component="p" mb="sm">
                Organiser un check-up efficace nécessite une planification et une bonne communication avec votre médecin. Voici des étapes à suivre :
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
                        Planifiez un rendez-vous annuel :
                    </Text>{' '}
                    Il est conseillé de programmer un bilan de santé une fois par an pour un suivi complet de votre état de santé.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Discutez de vos antécédents :
                    </Text>{' '}
                    Lors du rendez-vous, informez votre médecin de vos antécédents médicaux et familiaux afin d’adapter les tests et examens.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Faites des tests de dépistage :
                    </Text>{' '}
                    Selon votre âge, votre sexe et vos habitudes, votre médecin pourra vous recommander des tests spécifiques, tels que des dépistages de cancer ou des bilans sanguins.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Prenez des rendez-vous de suivi :
                    </Text>{' '}
                    En fonction des résultats, n'oubliez pas de planifier les consultations de suivi et de respecter les recommandations de votre médecin.
                </ListItem>
            </List>

            <Divider my="lg" />
            <footer>
                {/* Conclusion */}
                <Title order={2} mb="sm">
                    Conclusion
                </Title>
                <Text component="p">
                    Les bilans de santé réguliers jouent un rôle crucial dans le maintien de votre santé à long terme. Ils vous permettent de prévenir des maladies graves et de prendre en charge votre santé avant que des problèmes ne surviennent. N'oubliez pas de planifier des check-ups réguliers et de discuter ouvertement avec votre médecin pour préserver votre bien-être.
                </Text>
            </footer>
        </Container>
    )
};
