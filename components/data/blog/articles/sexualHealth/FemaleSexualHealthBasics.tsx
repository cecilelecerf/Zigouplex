
import { Title, Text, Container, List, ThemeIcon, Divider, ListItem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/sante_sexuelle/article_5.webp";

export const FemaleSexualHealthBasics: Article = {
    id: 4,
    name: "Les bases de la santé sexuelle féminine : Comprendre et prendre soin de soi",
    picture: MonImage,
    description: `La santé sexuelle féminine est essentielle pour le bien-être général. Cet article explore les bases de cette santé et propose des conseils pour la maintenir.`,
    metaTitle: 'Les bases de la santé sexuelle féminine : Comprendre et prendre soin de soi',
    metaDescription: 'Découvrez les bases de la santé sexuelle féminine et apprenez à maintenir un bien-être intime optimal avec des conseils pratiques et des recommandations pour prendre soin de soi.',
    content: (
        <Container component="article" size="md" p="md">
            {/* Section : Pourquoi la santé sexuelle féminine est importante */}
            <Title order={2} mb="sm">
                Pourquoi la santé sexuelle féminine est importante
            </Title>
            <Text component="p" mb="sm">
                La santé sexuelle est une composante clé du bien-être général d'une femme. Voici pourquoi il est essentiel d'y prêter attention :
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
                        Bien-être émotionnel :
                    </Text>{' '}
                    Une bonne santé sexuelle contribue à une meilleure estime de soi et à un équilibre émotionnel positif.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Prévention des infections :
                    </Text>{' '}
                    Une bonne hygiène et des pratiques sexuelles sûres permettent de prévenir les infections sexuellement transmissibles (IST).
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Contraception et planification familiale :
                    </Text>{' '}
                    Comprendre les options contraceptives permet de faire des choix éclairés concernant la grossesse et la planification familiale.
                </ListItem>
            </List>

            <Divider my="lg" />

            {/* Section : Conseils pour maintenir une bonne santé sexuelle */}
            <Title order={2} mb="sm">
                Conseils pour maintenir une bonne santé sexuelle
            </Title>
            <Text component="p" mb="sm">
                Il est essentiel d’adopter des pratiques régulières pour maintenir une bonne santé sexuelle. Voici des conseils à suivre :
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
                        Pratiquer une bonne hygiène intime :
                    </Text>{' '}
                    Nettoyez votre zone intime de manière régulière avec des produits doux et adaptés pour éviter les infections.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Se protéger contre les IST :
                    </Text>{' '}
                    Utilisez des méthodes de protection telles que les préservatifs pour éviter la transmission des IST.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Discuter ouvertement avec son partenaire :
                    </Text>{' '}
                    La communication ouverte sur les préférences sexuelles, les limites et la santé est essentielle pour une relation saine.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Consulter régulièrement un professionnel de santé :
                    </Text>{' '}
                    Des visites régulières chez un gynécologue ou un médecin permettent de surveiller votre santé sexuelle et de traiter les problèmes rapidement.
                </ListItem>
            </List>

            <Divider my="lg" />

            {/* Section : Reconnaître les signes d'alerte */}
            <Title order={2} mb="sm">
                Reconnaître les signes d'alerte
            </Title>
            <Text component="p" mb="sm">
                Il est important de connaître les signes d'alerte qui peuvent indiquer un problème de santé sexuelle. Voici quelques symptômes à surveiller :
            </Text>
            <List
                spacing="sm"
                icon={
                    <ThemeIcon color="red" size={24} radius="xl">
                        <IconCheck size={16} />
                    </ThemeIcon>
                }
            >
                <ListItem>
                    <Text component="span" fw="bold">
                        Douleurs pendant les rapports sexuels :
                    </Text>{' '}
                    Si vous ressentez des douleurs persistantes pendant les relations sexuelles, cela peut indiquer un problème médical.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Irrégularités menstruelles :
                    </Text>{' '}
                    Des règles irrégulières, douloureuses ou manquantes peuvent être le signe d'un trouble hormonal ou d'une autre affection.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Démangeaisons ou irritations :
                    </Text>{' '}
                    Des démangeaisons, des brûlures ou des irritations dans la zone génitale peuvent être des symptômes d'une infection.
                </ListItem>
            </List>

            <Divider my="lg" />

            {/* Conclusion */}
            <Title order={2} mb="sm">
                Conclusion
            </Title>
            <Text component="p">
                La santé sexuelle féminine est un aspect fondamental du bien-être global. En adoptant des habitudes de soins réguliers, une protection adéquate et une communication ouverte avec les professionnels de santé et votre partenaire, vous pouvez maintenir une santé optimale. N'hésitez pas à consulter un professionnel de santé pour toute question ou préoccupation.
            </Text>
        </Container>
    )
};
