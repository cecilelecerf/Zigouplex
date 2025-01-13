import { Title, Text, Container, List, ThemeIcon, Divider, ListItem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Article } from '../../topics';
import MonImage from "../../../../assets/blog/sante_mentale/article_1.webp";

export const STDPrevention: Article = {
    id: 2,
    name: "Prévention des IST : Clés pour protéger votre santé",
    picture: MonImage,
    description: `La prévention des infections sexuellement transmissibles (IST) est essentielle pour maintenir une bonne santé sexuelle. Cet article explore les meilleures pratiques pour réduire le risque d'IST et protéger votre bien-être.`,

    content: (
        <Container component="article" size="md" p="md">
            {/* Section : Pourquoi prévenir les IST */}
            <Title order={2} mb="sm">
                Pourquoi prévenir les IST
            </Title>
            <Text component="p" mb="sm">
                Les infections sexuellement transmissibles (IST) peuvent avoir des conséquences graves sur la santé, parfois sans symptômes évidents. Il est essentiel de prendre des mesures pour réduire le risque et protéger sa santé et celle de ses partenaires. Voici pourquoi la prévention est cruciale :
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
                        Protection contre des maladies graves :
                    </Text>{' '}
                    Certaines IST, comme le VIH ou l'hépatite, peuvent entraîner des complications de santé importantes si elles ne sont pas traitées.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Prévention de la transmission :
                    </Text>{' '}
                    Prévenir les IST réduit le risque de transmission à ses partenaires sexuels et à la communauté.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Maintien de la santé reproductive :
                    </Text>{' '}
                    Certaines IST peuvent affecter la fertilité, ce qui rend la prévention essentielle pour protéger la santé reproductive.
                </ListItem>
            </List>

            <Divider my="lg" />

            {/* Section : Comment prévenir les IST */}
            <Title order={2} mb="sm">
                Comment prévenir les IST
            </Title>
            <Text component="p" mb="sm">
                La prévention des IST passe par l'adoption de comportements responsables et sécuritaires. Voici quelques conseils clés :
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
                        Utilisez des préservatifs :
                    </Text>{' '}
                    Les préservatifs, utilisés correctement à chaque rapport sexuel, offrent une protection efficace contre de nombreuses IST.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Faites-vous tester régulièrement :
                    </Text>{' '}
                    Se faire tester fréquemment permet de détecter les IST tôt, même sans symptômes, et de prévenir leur transmission.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Limitez le nombre de partenaires :
                    </Text>{' '}
                    Réduire le nombre de partenaires sexuels réduit le risque d'exposition aux IST.
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Vaccinez-vous :
                    </Text>{' '}
                    Des vaccins sont disponibles pour prévenir certaines IST, comme l'hépatite B et le papillomavirus humain (HPV).
                </ListItem>
                <ListItem>
                    <Text component="span" fw="bold">
                        Évitez les comportements à risque :
                    </Text>{' '}
                    Limitez la consommation d'alcool ou de drogues, car ces substances peuvent altérer votre jugement et augmenter les risques d'exposition.
                </ListItem>
            </List>

            <Divider my="lg" />

            {/* Conclusion */}
            <Title order={2} mb="sm">
                Conclusion
            </Title>
            <Text component="p">
                La prévention des IST est essentielle pour maintenir une bonne santé sexuelle et protéger ses proches. En adoptant des pratiques comme l'utilisation systématique des préservatifs, les tests réguliers et la vaccination, vous pouvez réduire considérablement les risques. Protégez-vous et adoptez des comportements responsables pour un avenir sain.
            </Text>
        </Container>
    )
};
