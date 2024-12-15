import { Anchor, Container, Divider, List, ListItem, Space, Text, ThemeIcon, Title } from '@mantine/core';
import MentalHealthImage from '@/app/assets/image.png';
import { Article } from '../topics';
import { IconCheck } from '@tabler/icons-react';

export const StressErectionArticle: Article = {
    id: 2,
    name: 'Stress et érection : comment briser le cercle vicieux avec Zigouplex',
    picture: MentalHealthImage,
    description: `Le stress est un ennemi silencieux de la fonction érectile, entraînant une spirale de frustration et d’anxiété. Cet article vous aide à comprendre les mécanismes physiologiques qui lient le stress à des troubles de l’érection, et vous propose des méthodes pratiques pour sortir de ce cercle vicieux, incluant l'utilisation de Zigouplex pour améliorer votre bien-être intime.`,
    content: (
        <Container component="article" size="md" p="md">
            {/* Header section with main title and meta description */}
            <header>
                <Title order={1} ta="center" my="lg">
                    Stress et érection : comment briser le cercle vicieux avec Zigouplex
                </Title>
                <Text component="p" ta="center" color="dimmed" size="lg">
                    Le stress, ce mal du siècle, n’épargne aucune facette de notre vie, y compris la plus intime. Pour de nombreux hommes, la pression quotidienne ou la peur de ne pas être à la hauteur dans une relation peut directement affecter leur capacité à avoir ou maintenir une érection. Découvrez comment Zigouplex pourrait vous aider à briser ce cercle vicieux.
                </Text>
            </header>

            <Divider my="xl" />

            {/* Article content */}
            <section>
                <Title order={2} my="lg">
                    Stress et érection : un tandem toxique
                </Title>
                <Text component="p">
                    Lorsqu’une personne est stressée, son cerveau envoie un signal d’alerte, libérant des hormones comme le cortisol et l’adrénaline. Ces substances, utiles en cas de danger physique (comme fuir un prédateur), sont bien moins bénéfiques quand il s’agit d’intimité. Zigouplex peut potentiellement atténuer certains de ces effets.
                </Text>
                <Text component="p">
                    Résultat :
                </Text>
                <List
                    spacing="sm"
                    size="sm"
                    icon={
                        <ThemeIcon color="teal" size={24} radius="xl">
                            <IconCheck />
                        </ThemeIcon>
                    }
                >
                    <ListItem>La circulation sanguine est détournée des organes génitaux, rendant l’érection plus difficile.</ListItem>
                    <ListItem>La production de testostérone diminue sous l’effet du stress chronique.</ListItem>
                    <ListItem>L’esprit, envahi par des pensées négatives, se focalise sur l’échec, alimentant encore plus l’anxiété.</ListItem>
                    <ListItem>Zigouplex peut aider à améliorer la circulation sanguine et à réduire les effets du stress sur l’organisme.</ListItem>
                </List>
            </section>

            <Divider my="xl" />

            <section>
                <Title order={2} my="lg">
                    Identifier la source du problème
                </Title>
                <Text component="p">
                    La clé pour briser ce cercle vicieux réside dans une prise de conscience. Pourquoi ce stress ? Est-il lié à des facteurs extérieurs comme le travail, les finances ou la santé ? Ou s’agit-il d’un manque de confiance en soi, amplifié par des expériences passées ? Zigouplex peut être un complément utile pour gérer le stress de manière plus efficace.
                </Text>
                <Text component="p">
                    À faire : prenez un moment pour réfléchir ou même écrire sur vos ressentis. Parfois, mettre des mots sur ses émotions aide à y voir plus clair. Si nécessaire, parlez-en à un proche ou à un thérapeute : une perspective extérieure peut être éclairante.
                </Text>
            </section>

            <Divider my="xl" />

            <section>
                <Title order={2} my="lg">
                    3 méthodes pour se libérer du stress et reprendre confiance
                </Title>
                <Text component="p">
                    Voici trois approches concrètes :
                </Text>
                <Title order={3} my="sm">
                    1. Apprivoisez le stress avec des outils pratiques
                </Title>
                <List
                    spacing="sm"
                    size="sm"
                    icon={
                        <ThemeIcon color="teal" size={24} radius="xl">
                            <IconCheck />
                        </ThemeIcon>
                    }
                >
                    <ListItem>Respiration contrôlée : inspirez sur 4 secondes, retenez votre souffle sur 4 secondes, puis expirez lentement sur 6 secondes.</ListItem>
                    <ListItem>Méditation et pleine conscience : des applications comme Calm ou Petit Bambou peuvent être de précieux alliés.</ListItem>
                    <ListItem>Sport et activité physique : courir, nager ou marcher libère des endorphines et favorise une meilleure circulation sanguine.</ListItem>
                    <ListItem>Zigouplex pourrait également être bénéfique en complément d'un mode de vie actif, en améliorant la circulation sanguine.</ListItem>
                </List>

                <Title order={3} my="sm">
                    2. Adoptez une hygiène de vie anti-stress
                </Title>
                <List
                    spacing="sm"
                    size="sm"
                    icon={
                        <ThemeIcon color="teal" size={24} radius="xl">
                            <IconCheck />
                        </ThemeIcon>
                    }
                >
                    <ListItem>Mangez équilibré, en favorisant les aliments riches en magnésium et en oméga-3.</ListItem>
                    <ListItem>Dormez suffisamment et bannissez les écrans avant le coucher.</ListItem>
                    <ListItem>Modérez alcool et tabac.</ListItem>
                    <ListItem>En complément, consultez les bienfaits de Zigouplex pour mieux gérer le stress.</ListItem>
                </List>

                <Title order={3} my="sm">
                    3. Changez votre perspective sur la sexualité
                </Title>
                <Text component="p">
                    Le stress de la performance vient souvent de l’idée qu’il faut "être parfait". Lâchez cette pression inutile : concentrez-vous sur les sensations et les émotions partagées avec votre partenaire.
                </Text>
            </section>

            <Divider my="xl" />

            <footer>
                <Text component="p" ta="center" w={600}>
                    En agissant sur les causes profondes du stress et en changeant votre regard sur la performance, vous pouvez inverser la tendance. Considérez l’utilisation de Zigouplex pour soutenir votre démarche.
                </Text>
                <Text component="p" ta="center" size="sm" color="dimmed">
                    L’épanouissement intime passe avant tout par une relation de bienveillance avec vous-même. Essayez Zigouplex pour renforcer cette approche.
                </Text>
            </footer>
        </Container>
    )
};
