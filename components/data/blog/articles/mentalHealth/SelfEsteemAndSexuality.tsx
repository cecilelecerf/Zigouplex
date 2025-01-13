import { Title, Text, Container, List, ThemeIcon, Divider } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/sante_mentale/article_1.webp";

export const SelfEsteemAndSexuality: Article = {
    id: 5,
    name: "L'estime de soi et la sexualité : Un lien essentiel",
    picture: MonImage,
    description: `L'estime de soi joue un rôle crucial dans nos relations intimes et dans notre manière d'aborder la sexualité. Découvrez comment ces deux aspects sont liés et comment améliorer votre confiance en soi pour une vie sexuelle épanouie.`,

    content: (
        <Container component="article" size="md" p="md">
            {/* Section : L'impact de l'estime de soi sur la sexualité */}
            <Title order={2} mb="sm">
                L'impact de l'estime de soi sur la sexualité
            </Title>
            <Text component="p" mb="sm">
                Une faible estime de soi peut avoir des répercussions directes sur la manière dont nous vivons notre sexualité :
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
                        Doute sur ses capacités :
                    </Text>{' '}
                    Une personne avec une faible estime de soi peut avoir des difficultés à se sentir compétente ou désirée dans une relation intime.
                </List.Item>
                <List.Item>
                    <Text component="span" fw="bold">
                        Peur du rejet :
                    </Text>{' '}
                    Cette peur peut limiter l'initiative dans les relations sexuelles ou conduire à des comportements d'évitement.
                </List.Item>
                <List.Item>
                    <Text component="span" fw="bold">
                        Manque de communication :
                    </Text>{' '}
                    Une faible confiance en soi peut rendre difficile l'expression des besoins et des désirs sexuels.
                </List.Item>
            </List>

            <Divider my="lg" />

            {/* Section : Améliorer l'estime de soi pour une sexualité épanouie */}
            <Title order={2} mb="sm">
                Améliorer l'estime de soi pour une sexualité épanouie
            </Title>
            <Text component="p" mb="sm">
                Heureusement, il existe des moyens concrets pour renforcer votre estime de soi et améliorer votre vie sexuelle :
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
                        Travail sur soi :
                    </Text>{' '}
                    Identifiez les croyances limitantes qui affectent votre confiance et remplacez-les par des pensées positives.
                </List.Item>
                <List.Item>
                    <Text component="span" fw="bold">
                        Pratique de l'auto-compassion :
                    </Text>{' '}
                    Soyez bienveillant envers vous-même et acceptez vos imperfections comme faisant partie de votre humanité.
                </List.Item>
                <List.Item>
                    <Text component="span" fw="bold">
                        Activités valorisantes :
                    </Text>{' '}
                    Engagez-vous dans des activités qui renforcent votre sentiment de compétence et de satisfaction personnelle.
                </List.Item>
                <List.Item>
                    <Text component="span" fw="bold">
                        Communication ouverte :
                    </Text>{' '}
                    Parlez de vos insécurités avec votre partenaire pour renforcer la confiance et établir une meilleure compréhension mutuelle.
                </List.Item>
            </List>

            <Divider my="lg" />

            {/* Conclusion */}
            <Title order={2} mb="sm">
                Conclusion
            </Title>
            <Text component="p">
                L'estime de soi est une composante essentielle d'une sexualité épanouie. En travaillant sur votre confiance en vous-même
                et en renforçant votre relation avec votre partenaire, vous pouvez créer une vie intime plus enrichissante et harmonieuse.
                N'hésitez pas à demander de l'aide si nécessaire, car le chemin vers une meilleure estime de soi est une démarche qui peut être soutenue par des professionnels.
            </Text>
        </Container>
    )
};
