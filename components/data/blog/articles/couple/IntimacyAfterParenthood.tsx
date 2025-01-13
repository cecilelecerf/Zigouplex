import { Title, Text, Container, List, ThemeIcon, Divider } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/sante_mentale/intimacy_after_parenthood.webp";

export const IntimacyAfterParenthood: Article = {
    id: 4,
    name: "Retrouver l'intimité après la parentalité : Défis et solutions",
    picture: MonImage,
    description: `Devenir parent est une expérience transformative, mais cela peut aussi affecter l'intimité entre partenaires. Cet article explore les défis rencontrés après la parentalité et propose des solutions pour retrouver une connexion émotionnelle et physique.`,

    content: (
        <Container component="article" size="md" p="md">
            {/* Section : Les défis de l'intimité après la parentalité */}
            <Title order={2} mb="sm">
                Les défis de l'intimité après la parentalité
            </Title>
            <Text component="p" mb="sm">
                Après l'arrivée d'un enfant, de nombreux couples constatent des changements dans leur relation intime. Les causes principales incluent :
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
                        Fatigue et manque de sommeil :
                    </Text>{' '}
                    Les nuits interrompues et la charge parentale peuvent laisser peu d'énergie pour l'intimité.
                </List.Item>
                <List.Item>
                    <Text component="span" fw="bold">
                        Changements hormonaux :
                    </Text>{' '}
                    Les fluctuations hormonales, particulièrement après l'accouchement, peuvent affecter la libido.
                </List.Item>
                <List.Item>
                    <Text component="span" fw="bold">
                        Priorités divergentes :
                    </Text>{' '}
                    Les besoins de l'enfant peuvent prendre le pas sur ceux du couple.
                </List.Item>
                <List.Item>
                    <Text component="span" fw="bold">
                        Pression émotionnelle :
                    </Text>{' '}
                    Les ajustements au nouveau rôle de parent peuvent entraîner du stress et des tensions.
                </List.Item>
            </List>

            <Divider my="lg" />

            {/* Section : Stratégies pour retrouver l'intimité */}
            <Title order={2} mb="sm">
                Stratégies pour retrouver l'intimité
            </Title>
            <Text component="p" mb="sm">
                Bien que ces défis soient courants, il existe des moyens efficaces pour raviver l'intimité dans votre relation :
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
                        Planifier du temps ensemble :
                    </Text>{' '}
                    Fixez des moments réguliers pour des activités en couple, même de courte durée.
                </List.Item>
                <List.Item>
                    <Text component="span" fw="bold">
                        Prendre soin de soi :
                    </Text>{' '}
                    Investir dans votre bien-être personnel peut améliorer votre énergie et votre humeur.
                </List.Item>
                <List.Item>
                    <Text component="span" fw="bold">
                        Communication ouverte :
                    </Text>{' '}
                    Discutez honnêtement de vos besoins et préoccupations avec votre partenaire.
                </List.Item>
                <List.Item>
                    <Text component="span" fw="bold">
                        Chercher du soutien :
                    </Text>{' '}
                    N'hésitez pas à demander l'aide de proches ou d'un professionnel pour alléger votre charge parentale.
                </List.Item>
            </List>

            <Divider my="lg" />

            {/* Conclusion */}
            <Title order={2} mb="sm">
                Conclusion
            </Title>
            <Text component="p">
                La parentalité peut poser des défis à l'intimité, mais avec du temps, de la communication et des efforts mutuels, il est possible de retrouver une relation épanouissante. Priorisez votre relation de couple et n'ayez pas peur de demander du soutien lorsque nécessaire.
            </Text>
        </Container>
    )
};
