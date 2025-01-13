import { Title, Text, Container, List, ThemeIcon, Divider, ListItem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/sante_mentale/article_2.webp"

export const AnxietyAndIntimac: Article = {
    id: 4,
    name: " L'impact de l'anxiété sur l'intimité : Causes et solutions",
    picture: MonImage,
    description: `L'anxiété est une réalité courante qui peut affecter divers aspects de notre vie, y compris nos relations intimes. Cet article explore comment l'anxiété influence l'intimité et propose des solutions pour surmonter ces défis.`,

    content: (
        <Container component="article" size="md" p="md" >
            {/* Section : Les effets de l'anxiété sur l'intimité */}
            <Title order={2} mb="sm">
                Les effets de l'anxiété sur l'intimité
            </Title>
            <Text component="p" mb="sm">
                L'anxiété peut affecter l'intimité de plusieurs façons, notamment :
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
                    <Text component="span" w="bold">
                        Diminution du désir sexuel :
                    </Text>{' '}
                    Les pensées anxieuses peuvent réduire la libido et rendre difficile l'engagement dans des activités intimes.
                </ListItem>
                <ListItem>
                    <Text component="span" w="bold">
                        Difficultés de communication :
                    </Text>{' '}
                    L'anxiété peut entraîner des malentendus et limiter les échanges ouverts entre partenaires.
                </ListItem>
                <ListItem>
                    <Text component="span" w="bold">
                        Problèmes physiques :
                    </Text>{' '}
                    Les troubles tels que les troubles érectiles ou la douleur pendant les rapports peuvent être exacerbés par l'anxiété.
                </ListItem>
            </List>

            <Divider my="lg" />

            {/* Section : Stratégies pour surmonter l'anxiété dans l'intimité */}
            <Title order={2} mb="sm">
                Stratégies pour surmonter l'anxiété dans l'intimité
            </Title>
            <Text component="p" mb="sm">
                Heureusement, il existe des solutions pour atténuer l'impact de l'anxiété sur votre vie intime :
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
                    <Text component="span" w="bold">
                        Thérapie cognitivo-comportementale (TCC) :
                    </Text>{' '}
                    La TCC aide à identifier et à gérer les pensées négatives qui alimentent l'anxiété.
                </ListItem>
                <ListItem>
                    <Text component="span" w="bold">
                        Techniques de relaxation :
                    </Text>{' '}
                    La méditation, le yoga et les exercices de respiration profonde peuvent réduire les niveaux d'anxiété.
                </ListItem>
                <ListItem>
                    <Text component="span" w="bold">
                        Communication ouverte :
                    </Text>{' '}
                    Parlez de vos préoccupations avec votre partenaire pour renforcer la confiance et la compréhension.
                </ListItem>
                <ListItem>
                    <Text component="span" w="bold">
                        Consultation médicale :
                    </Text>{' '}
                    Un professionnel de santé peut proposer des traitements adaptés, comme des thérapies ou des médicaments.
                </ListItem>
            </List>

            <Divider my="lg" />

            {/* Conclusion */}
            <Title order={2} mb="sm">
                Conclusion
            </Title>
            <Text component="p">
                L'anxiété peut poser des défis dans l'intimité, mais avec les bonnes stratégies, il est possible de les surmonter.
                N'hésitez pas à chercher du soutien et à travailler avec votre partenaire pour cultiver une relation épanouissante et équilibrée.
            </Text>
        </Container >
    )
}
